from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html", time=0)


@app.route("/<time>")
def indexTime(time):
    return render_template("index.html", time=int(time))


if __name__ == "__main__":
    app.run(debug=True)
