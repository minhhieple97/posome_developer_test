# Posome Candidate Test  
This is a pre-interview quick test to evaluate your programming skill.

Don't be scared these below verbose questions, the problem underneath is quite simple, and it will not take too much time to be completed, so be confident.  

## Quick guide

You can use any programming language to solve these problems.

**Requirenment**
You'll step through 3 problems, for each problem:  
- You should explain your approach in the code comment section at the top of your function (by English/Vietnamese)
- Write down the `time & space complexity`
- If you have more than 1 approach for a single problem, choose the best one
  and compare it with the others in the code comment  
- Try to reduce the running time and memory usage
- Use correct input / output structure (avoid missing output information), 
  We recommend using JSON as the input/output
 - You should test your solution again the cases provided in `test_cases/problem_*.json`

> Max time & Max memory constrain is applied for python/javascript. It might different in other languages



#### Download your materials (sample code & test cases)
Click [here](./posome_developer_test.zip) to download your materials, including test cases in `json` format and code templates.
Your solution must at least be compatible with test cases assertion.
Be noted that we also prepare some private test cases that's not available for public.

#### Submission
Look at the `./solutions`  folder:
```
solutions
├── <your_language>
├── csharp
├── java
├── js
└── python
    ├── guide.md
    ├── evaluate.py
    └── solutions
        ├── problem_1.py
        ├── problem_2.py
        └── problem_3.py
```

You should put your solution in this folder structure.
If your language folder is missing, please create your own one.
 Submit it and guide us how to run your solution with the provided test cases.
 
> Due to too many languages available so we cannot prepare the starter template for all


## Problem 1: Lucky Couple (required)

A gaming system introduces a new game:  
- Each player submits an integer number in the range 1-1,000,000, called `Penny Number`
- At 6:30pm every day: The system will pick a random number, called `Golden Number`
- The winner of the game is the first couple (Player1, Player2) that:  
  `Player1's Penny Number + Player2's Penny Number = Golden Number`    
  Player1 and Player2 are the winners, and they will be rewarded a big prize.
  
**Question:**

Given `penny_numbers` array and `golden_number`  
Print out the indexes of the winner's numbers in the penny_numbers
If there is no winner couple, print out `[-1,-1]`

For example, let's say:  
```python  
# for more test cases: test_cases/problem_1.json
# players:       1 2 3 4 5 6 7 8 9 10 11 12 13 14
penny_numbers = [1,1,2,2,3,4,5,6,7,8, 9, 6, 8, 6 ]  
golden_number = 8
```

**Answer:**
```  
[4,6]
```
It means player 5 and player 7 are the winners.


**Explaination**

The winners are the couple (player 5, player 7) ,
they are the first couple that sum = 3 + 5 = 8
  
The others couples:
- (player 3, player 12): 2 + 6 = 8
- (player 4, player 8):   2 + 6 = 8  
- (player 1, player 9):   1 + 7 = 8 
  (player 1, player 9) is not the first couple compared to (player 5, player 7)  because:
  ```
  player1 -> player 5 -> player 7 -> player 9
  ```
  As you can see  (player 5, player 7) appeared and made the couple,  then player 9 appears right after.

  
**Constrains:**
- penny_numbers is integer `i`,  0 < `i` <= 1,000,000  
- golden_number is an integer, 0 < golden_number <= 2,000,000  
- Maximum 100,000 players
- Max Time: 20s
- Max Memory: 30MB


## Problem 2: Affiliate commission (optional)

Given `users` table:
```
users(id, parent_id, raw_commission)
  id: string(10)
  parent_id: string(10)
  raw_commission: float
```

Sample data:
| User | Parent | Raw Commission (USD) |  
|------|--------|----------------------|  
| A |   |12000 |  
| B | A |  500 |  
| C | A | 2000 |  
| D | A | 1500 |  
| E | B | 1000 |  
| F | B |  200 |  
| G | B |  100 |  
| H | C |  900 |  
| I | D |  800 |  
| J | H | 1000 |  
| K | I |  500 |  
| L | I |  100 |

Every month, the system will pay users some commission in USD.
The commission was collected and save in `users.raw_commission`.

But some `additional comission rules` might change the final commission:
- `user's final_commission` = `user's raw_commission` - `SUM_OF(final_commission of all descendants)` | Notice that `descendants` != `children`
- `user's final_commission` >= `0`


For example, the sample data above would be:

| User | Parent | Raw Commission (USD) | Final commission | Explanation | 
|------|--------|---------------------:|-----------------:|-------------|
| A |   |12000 | 7200 | 12000-(0+1000+700+1000+200+100+0+200+1000+500+100)
| B | A |  500 |    0 | 500-(1000+200+100) < 0
| C | A | 2000 | 1000 | 2000-(0+1000)
| D | A | 1500 |  700 | 1500-(200+500+100)
| E | B | 1000 | 1000 |
| F | B |  200 |  200 |
| G | B |  100 |  100 |
| H | C |  900 |    0 | 900-1000 < 0
| I | D |  800 |  200 | 800-(500+100)
| J | H | 1000 | 1000 |
| K | I |  500 |  500 |
| L | I |  100 |  100 |



**Question:**
Given `users` table data was all stored in memory (so you don't need to do anything related to the database)
```js
// for more test cases: test_cases/problem_2.json
users = [
 {"id": "A", "parent_id": null, "raw_commission": 0},
 {"id": "B", "parent_id": "A", "raw_commission": 0},
 ...
]
```
Calculate the final commission for all users in the system.

> Please provide time & space complexity of your solution in the code comment


**Answer**
A dictionary:
```json
{
  // key: value
  // <user_id>: <final_commission>,
  "A": 0,
  "B": 0,
  ...
}
```


**Constraint**
- Maximum 30,000 users
- Max Time: 30s
- Max Memory: 50MB


## Problem 3: Logistic (optional)

Long is a Grab shipper (Location: Thanh Xuân & Đống Đa).
On every 4 hours routine, Long go to the toys store and fill up his shipping case with some `packages`, ship it to customers so he can earn some shipping fee.

This is the largest toy store so the packages (car, blade, gun...) has an **unlimited amount in stock**, ie: Long can pickup some packages as many as he want.

Long is eager to maximize his `revenue` (total shipping fee of this route)


**Question:**
Given those info (from Long with love):

His new shipping case is big, it's capacity is `c` grams
> c = 50,000 mean ~50kg

And this package catalog:
```python
package_types = [
    # id: package short name
    # w: weight in grams
    # v: shipping fee in kVND (35 mean 35k vnđ), Long will earn this fee when his customer receive the package, called revenue
    {"id": "tank",  "w": 600, "v": 30.0},  
    {"id": "car",   "w": 300, "v": 14.0},  
    {"id": "blade", "w": 400, "v": 16.0},  
    {"id": "gun",   "w": 200, "v": 9.0}  
] 
```
```python
# for more test cases: test_cases/problem_3.json
sample_input = {  
  "capacity": 1000,  # c
  "package_types": package_types
}
```

Help Long to choose which `package` and its `quantity` to fill up his shipping case that his `revenue` is maximum but the total picked item `weight` is **not exceed** the capicity `c`.

**Answer**
```python
sample_output = {  
  "estimated_revenue": 48.0,  # total revenue of picked items
  "estimated_weight": 1000,   # total weight of picked items
  "picked_items": {
    # package_id: quantity
    "tank": 1, 
    "gun": 2
  }  
}
```

**Constrain**
- 0 < `c` <= 30,000,000, c mod 100 = 0 
  _(i.e: c was rounded to nearest 100 grams, eg: 100, 200, 500, 1600, ...)_
- 0 < `n` <= 100
- 0 < `w` < 10,000, w mod 100 = 0
   _(i.e: w was rounded to nearest 100 grams, eg: 100, 200, 500, 1600, ...)_
- 0 < `v` < 200
- Max Time: 30s
- Max Memory: 100MB

