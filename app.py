from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html", time=0)


@app.route("/<time>")
def indexTime(time):
    time = parseTime(time)
    return render_template("index.html", time=time)


def parseTime(time):
    hours = 0
    minutes = 0
    seconds = 0
    # isolate hours
    if "h" in time:
        parts = time.split("h")
        if len(parts) == 2:
            try:
                hours = int(parts[0])
            except ValueError:
                return 0
            time = parts[1]
    # isolate minutes
    if "m" in time:
        parts = time.split("m")
        if len(parts) >= 1:
            try:
                minutes = int(parts[0])
            except ValueError:
                return 0
            time = parts[1]
    # isolate seconds
    if "s" in time:
        try:
            seconds = int(time.rstrip("s"))
        except ValueError:
            return 0
    # calculate total seconds
    total_seconds = (hours * 3600) + (minutes * 60) + seconds
    return total_seconds


if __name__ == "__main__":
    app.run(debug=True)
