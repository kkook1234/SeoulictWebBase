
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
function gameover(){
    console.log("Game over,시간이 초과되었습니다!");
    rl.close();
    process.exit();
}
function check(position,rockcol,direction){
    dir=[[-1,-1],[-1,0],[-1,1],[0,-1]]
    if(direction==null){
        for(i=0;i<dir.length;i++){
            check(position,rockcol,dir[i]);
        }
    }
    else{
        arry=[];
        for(j=0;j<5;j++){
            x=parseInt(position[0])+j*parseInt(direction[0]);
            y=parseInt(position[1])+j*parseInt(direction[1]);
            mx=parseInt(position[0])+(-j*parseInt(direction[0]));
            my=parseInt(position[1])+(-j*parseInt(direction[1]));
            if(x<0||x>=arr.length||y<0||y>=arr.length){
                arry.unshift(". ")
            }
            else if(x>=0&&x<arr.length&&y>=0&&y<arr.length){
                arry.unshift(arr[x][y]);
            }
            if(mx<0||mx>=arr.length||my<0||my>=arr.length){
                if(j!=0){
                    arry.push(". ")
                }
                
            }
            else if(mx>=0&&mx<arr.length&&my>=0&&my<arr.length){
                if(j!=0){
                    arry.push(arr[mx][my]);
                }
            }
        }
        count=0;
        arry2=[];
        for(q=0;q<arry.length;q++){
            if(arry[q]==rockcol){
                count+=1;
            }
            else{
                arry2.push(count);
                count=0;
            }
        }
       
        if(Math.max.apply(null,arry2)>=5){
            if(rockcol=="1 "){process.stdout.write("Game over,흑이 승리!"); }
            else if(rockcol=="0 "){process.stdout.write("Game over,백이 승리!"); }
            rl.close();
            process.exit();
        }
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
setTimeout(gameover,300000);
rl.on('line', line => {
    input=line.split(',');
    if(input[0]>29 || input[1]>29){
        rangecheck=false;
    }
    if(rock==1 && rangecheck==true && arr[input[0]][input[1]]==". "){
        arr[input[0]][input[1]]="1 ";
        rock=0;
        view(arr);
        check(input,"1 ",null)
    }
    else if(rock==0 && rangecheck==true && arr[input[0]][input[1]]==". "){
        arr[input[0]][input[1]]="0 ";
        rock=1;
        view(arr);
        check(input,"0 ",null)
    }
    rangecheck=true;
})
