# Digital-Image-Processing-Demosaicing-Python-Javascript-

This demosacing algorithm is used to produce “normal” looking color images from camera sensors with color filter arrays installed on them. It will consist of 3 parts, each with it’s own goal:

Part 1 (Python): stacks the intensity values in a grid, so that you can use the bayer pattern to figure out which value pertains to which color.

Part 2 (Javascript): This is the first part to actually use demosaicing. The intensity of 4 photodiodes are combined into 1 by aggregating blocks of 4 voltage values at a time (2 rows and 2 columns of the array). The columns are multipled down, then added, then divided by 2.

Part 3 (Javascript): This part is similar to part 2, except the array iterates 1 step at a time when aggregating voltage, so a dummy array is needed while the new array is being produced.
