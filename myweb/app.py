from flask import Flask, render_template,request,jsonify
import pymysql

app = Flask(__name__)

@app.route('/')
def index():
    db_all_rating = pymysql.connect(host='localhost', user='root',
            password='1234', database='myweb3',
            autocommit=True, cursorclass=pymysql.cursors.DictCursor)
    with db_all_rating:
        db_cursor = db_all_rating.cursor()
        db_cursor.execute("SELECT * FROM rating")
        all_rating = db_cursor.fetchall()

        db_cursor.execute("select * from rating where movie_or_drama='movie';")
        movies = db_cursor.fetchall()

        db_cursor.execute("select * from rating where movie_or_drama='drama';")
        dramas = db_cursor.fetchall()

        db_cursor.execute("select img.poster_image from rating rt join image img on rt.id=img.id where rt.movie_or_drama='movie';")
        movie_poster_img = db_cursor.fetchall()

        db_cursor.execute("select img.poster_image from rating rt join image img on rt.id=img.id where rt.movie_or_drama='drama';")
        drama_poster_img = db_cursor.fetchall()

        db_cursor.execute("select * from video order by date desc;")
        recent_issues = db_cursor.fetchall()

        db_cursor.execute("select * from video;")
        videos = db_cursor.fetchall()

    return render_template('index.html', all=all_rating, movies=movies,dramas=dramas, movie_poster_img=movie_poster_img,
                           drama_poster_img=drama_poster_img, recent_issues=recent_issues, videos=videos,
                           )
@app.route('/movies.html')
def movies():
    db_all_rating = pymysql.connect(host='localhost', user='root',
            password='1234', database='myweb3',
            autocommit=True, cursorclass=pymysql.cursors.DictCursor)
    with db_all_rating:
        db_cursor = db_all_rating.cursor()
    
        db_cursor.execute("SELECT * FROM rating;")
        all_rating = db_cursor.fetchall()

        db_cursor.execute("select * from rating where movie_or_drama='movie';")
        movies = db_cursor.fetchall()

        db_cursor.execute("select img.poster_image from rating rt join image img on rt.id=img.id where rt.movie_or_drama='movie';")
        movie_poster_img = db_cursor.fetchall()
      
    return render_template('movies.html', all=all_rating,movies=movies,movie_poster_img=movie_poster_img)



@app.route('/movies.html/modal', methods=['POST'])
def modal2():
    data=request.get_json()['data']
   
    data1="SELECT rt.name, rt.rating,date_format(rt.date,'%M %D, %Y') as date, img.poster_image,img.background_image,vd.video_title,vd.video_link FROM rating rt join image img on rt.id=img.id join video vd on img.id=vd.id where name='"+data+"';"
    
    db_all_rating = pymysql.connect(host='localhost', user='root',
            password='1234', database='myweb3',
            autocommit=True, cursorclass=pymysql.cursors.DictCursor)
    with db_all_rating:
        db_cursor = db_all_rating.cursor()
        db_cursor.execute(data1)
        all_rating = db_cursor.fetchall()
      
    return jsonify(all_rating)


@app.route('/movies.html/sort', methods=['POST'])
def movie_sort():
    sort = request.form['sort']

    db_all_rating = pymysql.connect(host='localhost', user='root',
            password='1234', database='myweb3',
            autocommit=True, cursorclass=pymysql.cursors.DictCursor)
    db_cursor = db_all_rating.cursor()
    db_cursor.execute("SELECT * FROM rating;")
    all_rating = db_cursor.fetchall()

    if sort=='date':#날짜순으로 정렬
       db_cursor.execute("select * from rating where movie_or_drama='movie'order by date desc;")
       movies = db_cursor.fetchall()
       db_cursor.execute("select img.poster_image from rating rt join image img on rt.id=img.id where rt.movie_or_drama='movie'order by date desc;")
       movie_poster_img = db_cursor.fetchall()

    elif sort=='name':#이름순으로 정렬
       db_cursor.execute("select * from rating where movie_or_drama='movie'order by name asc;")
       movies = db_cursor.fetchall()
       db_cursor.execute("select img.poster_image from rating rt join image img on rt.id=img.id where rt.movie_or_drama='movie'order by name asc;")
       movie_poster_img = db_cursor.fetchall()

    else: #평점순으로 정렬
       db_cursor.execute("select * from rating where movie_or_drama='movie'order by rating desc;")
       movies = db_cursor.fetchall()
       db_cursor.execute("select img.poster_image from rating rt join image img on rt.id=img.id where rt.movie_or_drama='movie'order by rating desc;")
       movie_poster_img = db_cursor.fetchall()

    return render_template('movies.html', all=all_rating,movies=movies,movie_poster_img=movie_poster_img)

@app.route('/tvshows.html')
def tvshows():
    db_all_rating = pymysql.connect(host='localhost', user='root',
            password='1234', database='myweb3',
            autocommit=True, cursorclass=pymysql.cursors.DictCursor)
    with db_all_rating:
        db_cursor = db_all_rating.cursor()
        db_cursor.execute("SELECT * FROM rating")
        all_rating = db_cursor.fetchall()

        db_cursor.execute("select * from rating where movie_or_drama='drama';")
        dramas = db_cursor.fetchall()

        db_cursor.execute("select img.poster_image from rating rt join image img on rt.id=img.id where rt.movie_or_drama='drama';")
        drama_poster_img = db_cursor.fetchall()
    return render_template('tvshows.html', all=all_rating,dramas=dramas,drama_poster_img=drama_poster_img)

@app.route('/tvshows.html/modal', methods=['POST'])
def modal_tvshow():
    data=request.get_json()['data']
   
    data1="SELECT rt.name, rt.rating,date_format(rt.date,'%M %D, %Y') as date, img.poster_image,img.background_image,vd.video_title,vd.video_link FROM rating rt join image img on rt.id=img.id join video vd on img.id=vd.id where name='"+data+"';"
    
    db_all_rating = pymysql.connect(host='localhost', user='root',
            password='1234', database='myweb3',
            autocommit=True, cursorclass=pymysql.cursors.DictCursor)
    with db_all_rating:
        db_cursor = db_all_rating.cursor()
        db_cursor.execute(data1)
        all_rating = db_cursor.fetchall()
      
    return jsonify(all_rating)

@app.route('/tvshows.html/sort', methods=['POST'])
def drama_sort():
    sort = request.form['sort']
    print(sort)
    db_all_rating = pymysql.connect(host='localhost', user='root',
            password='1234', database='myweb3',
            autocommit=True, cursorclass=pymysql.cursors.DictCursor)
    db_cursor = db_all_rating.cursor()
    db_cursor.execute("SELECT * FROM rating;")
    all_rating = db_cursor.fetchall()

    if sort=='date':#날짜순으로 정렬
       db_cursor.execute("select * from rating where movie_or_drama='drama'order by date desc;")
       dramas = db_cursor.fetchall()
       db_cursor.execute("select img.poster_image from rating rt join image img on rt.id=img.id where rt.movie_or_drama='drama'order by date desc;")
       drama_poster_img = db_cursor.fetchall()

    elif sort=='name':#이름순으로 정렬
       db_cursor.execute("select * from rating where movie_or_drama='drama'order by name asc;")
       dramas = db_cursor.fetchall()
       db_cursor.execute("select img.poster_image from rating rt join image img on rt.id=img.id where rt.movie_or_drama='drama'order by name asc;")
       drama_poster_img = db_cursor.fetchall()
    
    else: #평점순으로 정렬
       db_cursor.execute("select * from rating where movie_or_drama='drama'order by rating desc;")
       dramas = db_cursor.fetchall()
       db_cursor.execute("select img.poster_image from rating rt join image img on rt.id=img.id where rt.movie_or_drama='drama'order by rating desc;")
       drama_poster_img = db_cursor.fetchall()
    print(dramas)
    return render_template('tvshows.html', all=all_rating, dramas=dramas, drama_poster_img=drama_poster_img)

@app.route('/videos.html')
def videos():
    db_all_rating = pymysql.connect(host='localhost', user='root',
            password='1234', database='myweb3',
            autocommit=True, cursorclass=pymysql.cursors.DictCursor)
    db_cursor = db_all_rating.cursor()

    with db_all_rating:
        db_cursor.execute("select * from video;")
        videos = db_cursor.fetchall()
    return render_template('videos.html', videos=videos)

@app.route('/videos.html/sort', methods=['POST'])
def video_sort():
    sort = request.form['sort']

    db_all_rating = pymysql.connect(host='localhost', user='root',
            password='1234', database='myweb3',
            autocommit=True, cursorclass=pymysql.cursors.DictCursor)
    db_cursor = db_all_rating.cursor()

    if sort=='date':#날짜순으로 정렬
       db_cursor.execute("select * from video order by date desc;")
       videos = db_cursor.fetchall()

    elif sort=='name':#이름순으로 정렬
       db_cursor.execute("select * from video order by video_title asc;")
       videos = db_cursor.fetchall()

    else: #평점순으로 정렬
       db_cursor.execute("select * from video vd join rating rt on vd.id=rt.id order by rt.rating desc;")
       videos = db_cursor.fetchall()

    return render_template('videos.html', videos=videos)



if __name__ == "__main__":
    app.run(port=5001,debug=True)