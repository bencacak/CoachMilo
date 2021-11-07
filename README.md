# Coach Milo
#### A Running Companion to Discord
---
## Commands
---
### Logging Functions

#### `!user`
- The `!user` command connects Discord guild members to the information they have stored in the database.
    - ##### `!user set`
        - If a user wishes to use the database features of Coach Milo, then they **MUST** start their user profile by using command `!user set`. This creates a unique database key for them based on their user ID.
    - ##### `!user`
        - To view their information once they have intially set up their data store using `!user set`, users can use `!user` to see the data they have stored. By default, all values that are stored are set to `false`.
    - ##### `!user reset`
        - If a user wishes to wipe the data stored by Coach Milo about them, they can use `!user reset` to set all fields back to their default values.

#### `!log`
- The `!log` command is how user input their data into the database. **NOTE:** You must have used `!user set` to use this command.
- The `!log` command takes two arguments. Correct syntax looks like this:
```
!log <parameter> <value>
```
- Right now, the supported parameters and values are:
    - ##### `height`
        - `height` (number only) in inches or centimeters
    - ##### `weight`
        - `weight` (number only) in pounds or kilograms
    - ##### `age`
        - `age` (number only) in years
    - ##### `sex`
        - `sex` as your sex as `male` or `female`
    - ##### `metric`
        - `on` or `off`
        - This will tell the bot whether or not you weight and height is in *pounds* and *inches*, or *kilograms* and *centimeters*
    - ##### `5k`
        - `5k pr` as time in the form of `hh:mm:ss`
    - ##### `10k`
        - `10k pr` as time in the form of `hh:mm:ss`
    - ##### `half`
        - `half marathon pr` as time in the form of `hh:mm:ss`
    - ##### `full`
        - `full marathon pr` as time in the form of `hh:mm:ss`
    - ##### `ftp`
        - `ftp` as watts (number only)
---
### Calculator Functions

#### `!pace`
- The `!pace` command will convert a given pace from xx:xx min/mi to min/km and vice versa.
- *Syntax:* `!pace DD:HH:MM:SS <unit>`
  - The day and the hour fields can, and probably should be left empty--unless you are a snail.
  - *Example:* `!pace 10:51 mi`
```
    Input:
    !pace 10:51 mi

    Output:
    @user, a 10:51 mi is equal to a 00:06:41 km.
```

#### `!tdee`
- The `!tdee` command will calculate your estimated energy expenditure.
- *Syntax:* `!tdee <male (m)/female (f)> <age> <height in inches (number only)> <weight in pounds (number only)>`
  - *Example:* `!tdee m 23 74 200`
  - `!tdee metric` will do the same thing&emdash;replace height in inches with centimeters, and weight in pounds with kilograms.
```
    Input:
    !tdee m 23 74 200

    Ouput:
    *Message embed with results*
```

#### `!bmi`
- The `!bmi` command will calculate your estimated energy expenditure.
- *Syntax:* `!bmi <height in inches (number only)> <weight in pounds (number only)>`
  - *Example:* `!bmi 74 200`
  - `!bmi metric` will do the same thing&emdash;replace height in inches with centimeters, and weight in pounds with kilograms. 
```
    Input:
    !bmi 74 200

    Output:
    *Message embed with results*
```

#### `!fat`

- The `!fat` command will calculate your estimated body fat using the U.S. Navy method.
- *Syntax*: `!fat <neck circumference> <waist circumference> <hip circumference for women only>`
    - Accepted arguments:
        ```
        <neck circumference> Number in centimeters or inches depending on user setting
        <waist circumference> Number in centimeters or inches depending on user setting
        <hip circumference> Number in centimeters or inches depending on user setting -- required for user who have profile sex set to female
        ```

#### `!kcal`

- The `!kcal` command will calculate the necessary deficit or surplus one needs to meet their goals based on a specified activity level.
- *Syntax*: `!kcal <activity level>`
    - Accepted arguments:
        ```
        <1> or <sedentary>
        <2> or <light>
        <3> or <moderate>
        <4> or <heavy>
        <5> or <extreme>
        ```
    - *Example*:
        ```
        // Input:
        !kcal 2

        // Output:
        <message embed with calculated deficits and links to optional macronutrient goals>
        ```
#### `!help`
- Use `!help` for command help.
- `!help < argument >` will summon a message embed with a solution to a specific problem.
  - Accepted `!help` arguments include:
    ```
    bmi
    tdee
    pace
    ```
  - *Example:* `!help tdee`

---


