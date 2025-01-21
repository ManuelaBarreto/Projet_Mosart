import os

for file in os.listdir("backend/images/mandelbrot-2"):
    zoom_level = int(file)
    if zoom_level < 1:
        continue

    middle = 2 ** (zoom_level-1)
    for tile in os.listdir(os.path.join("backend/images/mandelbrot-2/", file)):
        x, y = map(int, tile.split(".")[0].split('_'))

        if x < middle and y < middle:
            os.remove(os.path.join("backend/images/mandelbrot-2/", file, tile))