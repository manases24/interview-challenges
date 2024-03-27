package move

import "testing"

func TestMove(t *testing.T) {
	tests := []struct {
		position int
		roll     int
		expected int
	}{
		{0, 1, 2},
		{3, 2, 7},
		{10, 3, 16},
		{-5, 4, 3},
	}

	for _, test := range tests {
		result := Move(test.position, test.roll)
		if result != test.expected {
			t.Errorf("Expected Move(%d, %d) to be %d, but got %d", test.position, test.roll, test.expected, result)
		}
	}
}
