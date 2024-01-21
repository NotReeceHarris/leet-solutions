# https://leetcode.com/problems/zigzag-conversion/

impl Solution {
    pub fn convert(s: String, num_rows: i32) -> String {
        if num_rows == 1 {
            return s;
        }

        let num_rows = num_rows as usize;
        let mut rows: Vec<String> = vec![String::new(); num_rows];
        let mut current_row = 0;
        let mut direction = -1;

        for c in s.chars() {
            rows[current_row].push(c);
            if current_row == 0 || current_row == num_rows - 1 {
                direction *= -1;
            }
            current_row = (current_row as i32 + direction) as usize;
        }

        rows.join("")
    }
}