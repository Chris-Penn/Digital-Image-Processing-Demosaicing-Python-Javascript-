arr = []
height = 256
width = 256
h = str(height*2)
w = str(width*2)

with open('data.txt', 'r') as f:
  data = f.readlines()
  for line in data:
    line = line.replace(',',' 0 0 \n')
    arr.append(line)
    print(line)
f.close();

fi = open("final.txt", "w")
fi.write('RGB\n')
fi.write(h + '\n')
fi.write(w + '\n')
for i in range (0, height):
  for j in range(0, width):
    fi.write(arr[j])    
fi.close()