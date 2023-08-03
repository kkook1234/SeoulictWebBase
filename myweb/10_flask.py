from flask import Flask, render_template
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

    return render_template('myweb.html', all=all_rating, movies=movies,dramas=dramas, movie_poster_img=movie_poster_img,
                           drama_poster_img=drama_poster_img, recent_issues=recent_issues, videos=videos,
                           )
def test():
    return "hi"


if __name__ == "__main__":
    app.run(port=5001,debug=True)