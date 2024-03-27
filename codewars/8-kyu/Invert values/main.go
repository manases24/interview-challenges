package main

// Invert values

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// Link: https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/go

func Invert(arr []int) []int {
	if len(arr) == 0 {
		return []int{}
	}

	var result []int
	for _, num := range arr {
		result = append(result, -num)
	}
	return result
}
