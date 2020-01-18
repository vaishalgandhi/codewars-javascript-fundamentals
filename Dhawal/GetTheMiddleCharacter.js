// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s)
{
  let length = s.length;
  let middle = Math.floor(length/2);
  
  if (length % 2 === 0)
  {
    return s[middle - 1] + s[middle]
  }
  else 
  {
    return s[middle]
  }
}