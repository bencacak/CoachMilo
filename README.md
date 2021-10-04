# Coach Milo
#### A Running Companion to Discord
---
## Commands
---
### `!pace`
- The `!pace` command will convert a given pace from xx:xx min/mi to min/km and vice versa.
- *Syntax:* `!pace DD:HH:MM:SS <mi/km>`
  - The day and the hour fields can, and probably should be left empty--unless you are a snail.
  - *Example:* `!pace 10:51 mi`


    Input:
    !pace 10:51 mi

    Output:
    @user, a 10:51 mi is equal to a 00:06:41 km.

---
### `!tdee`
- The `!tdee` command will calculate your estimated energy expenditure.
- *Syntax:* `!tdee < male (m)/female (f) > < age > < height in inches (number only) > < weight in pounds (number only) >`
  - *Example:* `!tdee m 23 74 200`
  - `!tdee metric` will do the same thing&emdash;replace height in inches with centimeters, and weight in pounds with kilograms.


    Input:
    !tdee m 23 74 200

    Ouput:
    *Message embed with results*

---
### `!bmi`
- The `!bmi` command will calculate your estimated energy expenditure.
- *Syntax:* `!bmi < height in inches (number only) > < weight in pounds (number only) >`
  - *Example:* `!bmi 74 200`
  - `!bmi metric` will do the same thing&emdash;replace height in inches with centimeters, and weight in pounds with kilograms. 


    Input:
    !bmi 74 200

    Output:
    *Message embed with results*

---
### `!help`
- Use `!help` for command help.
- `!help < argument >` will summon a message embed with a solution to a specific problem.
  - Accepted `!help` arguments include:
    - `bmi`
    - `tdee`
    - `pace`
  - *Example:* `!help tdee`

---


