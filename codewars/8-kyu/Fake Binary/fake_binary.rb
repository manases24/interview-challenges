# Fake Binary
# Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
# Note: input will never be an empty string
# Link: https://www.codewars.com/kata/57eae65a4321032ce000002d/train/ruby

def fake_bin(s)
  s.chars.map { |s| s < "5" ? "0" : "1" }.join
end

result = fake_bin('45385593107843568') # 01011110001100111
puts result
