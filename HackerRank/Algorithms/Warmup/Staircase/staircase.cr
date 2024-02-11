def staircase(n)
  (1..n).each do |i|
    spaces = " " * (n-i)
    hashtags = "#" * i
    puts spaces + hashtags
  end

end

staircase(5)
