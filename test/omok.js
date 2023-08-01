let arr=[];
let row=[];
for(i=0; i<30; i++){
    for(j=0; j<30; j++){
        if(j==29){
            row.push(". ");
            arr.push(row);
            row=[];
          
        }
        else{
        row.push(". ");
        }
         
    }
   
}
function view(arr1){
    for(i=0; i<30; i++){
        for(j=0; j<30; j++){
            if(j==29){
                        process.stdout.write(arr1[i][j].toString()+"\n");
    
                    
                    }
                    else{
                        process.stdout.write(arr1[i][j].toString()+"");
                        process.stdout.write(" ");
                        }    

        }
    }
}
let rockcount=[1,1,1,1];//세로,가로,왼오,오왼
function check(position,rockcol){
    x=parseInt(position[0]);
    y=parseInt(position[1]);
    resultarr=[];
    //세로
    let colarr=[];
    for(p=x-4;p<x+5;p++){
        if(p<0||p>=arr.length){
            colarr.push(". ")
        }
        else{
        colarr.push(arr[p][y])}
    }
    let count=0;
    let colarr2=[];
    for(q=0;q<colarr.length;q++){
        if(colarr[q]==rockcol){
            count+=1;
        }
        else{
            colarr2.push(count);
            count=0;
        }
    }

    resultarr.push(Math.max.apply(null,colarr2));
    
    //가로
    colarr=[];
    for(p=y-4;p<y+5;p++){
        if(p<0||p>=arr.length){
            colarr.push(". ");
        }
        else{ 
            
            colarr.push(arr[x][p]);
        }
    }
    count=0;
    colarr2=[];
    for(q=0;q<colarr.length;q++){
        if(colarr[q]==rockcol){
            count+=1;
        }
        else{
            colarr2.push(count);
            count=0;
        }
    }
    resultarr.push(Math.max.apply(null,colarr2));
    
    
    //대각선(왼오)
    colarr=[];
    for(p=-4;p<+5;p++){    
        if(x+p<0||x+p>=arr.length||y+p<0||y+p>=arr.length){
            colarr.push(". ");
        }
        else{ 
            colarr.push(arr[x+p][y+p]);
        }
        
    }
    count=0;
    colarr2=[];
    for(q=0;q<colarr.length;q++){
        if(colarr[q]==rockcol){
            count+=1;
        }
        else{
            colarr2.push(count);
            count=0;
        }
    }
    resultarr.push(Math.max.apply(null,colarr2));
   
    //대각선(오왼)
    colarr=[];
    for(p=-4;p<+5;p++){    
        if(x+p<0||x+p>=arr.length||y-p<0||y-p>=arr.length){
            colarr.push(". ");
        }
        else{ 
            colarr.push(arr[x+p][y-p]);
        }
        
    }
    count=0;
    colarr2=[];
    for(q=0;q<colarr.length;q++){
        if(colarr[q]==rockcol){
            count+=1;
        }
        else{
            colarr2.push(count);
            count=0;
        }
    }
    resultarr.push(Math.max.apply(null,colarr2));

    
    if(Math.max.apply(null,resultarr)>=5){
        if(rockcol=="1 "){process.stdout.write("흑이 승리!"); }
    else if(rockcol=="0 "){process.stdout.write("백이 승리!"); }
    rl.close();
    process.exit();
    }
    

}
let rock=1;
let rangecheck=true;
view(arr)
const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
    
})
rl.on('line', line => {
    input=line.split(' ');
    console.log(input)
    if(input[0]>29 || input[1]>29){
        rangecheck=false;
    }
    if(rock==1 && rangecheck==true && arr[input[0]][input[1]]==". "){
        arr[input[0]][input[1]]="1 ";
        rock=0;
        view(arr);
        check(input,"1 ")
    }
    else if(rock==0 && rangecheck==true && arr[input[0]][input[1]]==". "){
        arr[input[0]][input[1]]="0 ";
        rock=1;
        view(arr);
        check(input,"0 ")
    }
    rangecheck=true;
})
