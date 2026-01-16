# NBA Players Management System

**Group Members:** Harry Lyu, Chenfei Peng  
**Presentation time:** Mon, 8 May, 2023

## Project Overview

We decided to implement a project using existing technology. Our project aims to create an NBA players management system using mySQL. To be more specific, we plan to create a well-designed and user-friendly interface that allows users to filter, manage and analyze NBA player data. This platform will utilize the mySQL database and will include the following features:

1. **Ability to add a new player:** Users will be able to add new players to the database by providing information such as full name, team, position, country, jersey number, height, and weight. And we can find the new player in the database using mySQL query.
2. **Filter by various categories:** Users will be able to filter player information by various categories such as teams, countries, schools, positions, jersey number, etc. This will allow users to easily find specific players or groups of players that meet certain criteria.
3. **Switch buttons for historical players and active players:** Users will be able to switch between viewing information for historical players (i.e. retired players) and active players (i.e. current players). This will allow users to easily compare and analyze player data from different eras.
4. **The database will consist of a table of NBA players basic info:** "NBA_Players". The "NBA_Players" table will contain basic information about each player, such as full name, team, position, country, jersey number, height, weight, etc.

Overall, this platform will provide an efficient way for users to manage and analyze NBA player data. We believe that this project will be valuable to NBA fans, journalists, statisticians, and researchers.

## Technology Stack

- **Front-end:** Angular 15
- **Server:** Node.js with Express
- **Database:** MySQL

---

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MySQL** (v5.7 or higher) - [Download here](https://www.mysql.com/downloads/)
- **Angular CLI** (optional, included in dependencies)

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Final-Project-Csci-4453
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Angular dependencies
- Express
- CORS
- mysql2

### 3. Database Setup

#### Step 1: Start MySQL Server

Make sure your MySQL server is running.

#### Step 2: Create Database and Tables

Log into MySQL:
```bash
mysql -u root -p
```

Run the following SQL commands (or use the `Code for the Database` file):

```sql
CREATE SCHEMA Final_Project;
USE Final_Project;

CREATE TABLE Final_Project.NBA_Players (
    player_name VARCHAR(50),
    status VARCHAR(10),
    teams VARCHAR(50),
    country VARCHAR(30),
    school_name VARCHAR(50),
    school_type VARCHAR(30),
    position VARCHAR(10),
    jersey_number INT,
    height VARCHAR(10),
    weight INT
);

INSERT INTO Final_Project.NBA_Players (player_name, status, teams, country, school_name, school_type, position, jersey_number, height, weight)
VALUES
    ('LeBron James', 'Active', 'Cavaliers, Heat, Lakers', 'USA', 'St. Vincent-St. Mary HS', 'High School', 'SF', 6, '6''9"', 250),
    ('Stephen Curry', 'Active', 'Warriors', 'USA', 'Davidson College', 'Community College', 'PG', 30, '6''3"', 190),
    ('Luka Dončić', 'Active', 'Mavericks', 'Slovenia', 'Overseas', 'Foreign School', 'PG', 77, '6''7"', 230),
    ('Giannis Antetokounmpo', 'Active', 'Bucks', 'Greece', 'Overseas', 'Foreign School', 'PF', 34, '6''11"', 242),
    ('Nikola Jokić', 'Active', 'Nuggets', 'Serbia', 'Overseas', 'Foreign School', 'C', 15, '6''11"', 284),
    ('Kobe Bryant', 'Inactive', 'Lakers', 'USA', 'Lower Merion HS','High School', 'SG', 24, '6''6"', 212),
    ('Tim Duncan', 'Inactive', 'Spurs', 'USA', 'Wake Forest University', 'University', 'PF', 21, '6''11"', 250),
    ('Dirk Nowitzki', 'Inactive', 'Mavericks', 'Germany', 'Overseas', 'Foreign School', 'PF', 41, '7''0"', 245),
    ('Dwyane Wade', 'Inactive', 'Heat, Bulls, Cavaliers', 'USA', 'Marquette University', 'University', 'SG', 3, '6''4"', 220),
    ('Allen Iverson', 'Inactive', '76ers, Nuggets, Pistons, Grizzlies', 'USA', 'Georgetown University', 'University', 'PG', 3, '6''0"', 165);
```

Exit MySQL:
```sql
exit;
```

### 4. Configure Database Connection

Update the database credentials in `server/connection.js`:

```javascript
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'YOUR_MYSQL_USERNAME',    // Change this
  password: 'YOUR_MYSQL_PASSWORD', // Change this
  database: 'Final_Project'
});
```

---

## Running the Application

### Step 1: Start the Backend Server

Open a terminal and run:

```bash
node server/connection.js
```

You should see:
```
Server listening on port 3000
connected to database
```

**Keep this terminal running.**

### Step 2: Start the Angular Frontend

Open a **new terminal** and run:

```bash
npm start
```

or

```bash
ng serve
```

You should see:
```
** Angular Live Development Server is listening on localhost:4200 **
✔ Compiled successfully.
```

**Keep this terminal running as well.**

### Step 3: Open the Application

Open your web browser and navigate to:

```
http://localhost:4200
```

---

## Application Features

Once the application is running, you can:

- **View Active Players** - See current NBA stars like LeBron James, Stephen Curry, Luka Dončić, Giannis Antetokounmpo, and Nikola Jokić
- **View Inactive Players** - Browse retired legends like Kobe Bryant, Tim Duncan, Dirk Nowitzki, Dwyane Wade, and Allen Iverson
- **Add New Players** - Add new NBA players to the database with their information
- **Filter Players** - Search and filter by team, position, country, school, height, weight, and more
- **Switch Between Active/Inactive** - Toggle between current and retired players

---

## API Endpoints

The backend server provides the following API endpoints:

- `GET /data` - Retrieve all active players
- `GET /dataInactive` - Retrieve all inactive (retired) players
- `POST /post` - Add a new player to the database

---

## Project Structure

```
Final-Project-Csci-4453/
├── server/
│   └── connection.js          # Backend server (Express + MySQL)
├── src/
│   └── app/
│       ├── activeplayer/      # Active players component
│       ├── inactiveplayer/    # Inactive players component
│       ├── newrequest/        # Add new player component
│       ├── home/              # Home page component
│       └── app.module.ts      # Main Angular module
├── Code for the Database      # SQL schema and data
├── package.json               # Dependencies
└── README.md                  # This file
```

---

## Troubleshooting

### Port Already in Use

If you get an error that port 3000 or 4200 is already in use:

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill

# Kill process on port 4200
lsof -ti:4200 | xargs kill
```

### Database Connection Error

If you get a database connection error:
1. Make sure MySQL server is running
2. Verify your username and password in `server/connection.js`
3. Ensure the `Final_Project` database exists

### MySQL Authentication Error

If you see `ER_NOT_SUPPORTED_AUTH_MODE`, the project already uses `mysql2` which should fix this issue.

---

## Team Contributions

### Chenfei Peng:
1. Create the initial database schema for the "NBA_Players"
2. Develop the user interface for the platform, including the ability to add a new player and filter player information by various categories
3. Establishing a connection to the mySQL database and executing queries to retrieve and modify data
4. Implementing an API endpoint to add a new player to the "NBA_Players" table

### Harry Lyu:
1. Implement the backend functionality for the platform, including the ability to add a new player and retrieve player information based on various filters
2. Develop the "Switch buttons for historical players and active players" feature to allow users to switch between viewing information for retired and current players
3. Designing and implementing database schema, table structures, relationships and constraints that align with the project's requirements
4. Developing logic to switch between viewing information for historical players (i.e. retired players) and active players (i.e. current players)
5. Implementing API endpoints to retrieve player information based on various filters, such as team, country, position, jersey number, height, and weight

### Both:
1. Work together to explore more features of the frontend and backend
2. Debug and troubleshoot any issues that arise during development and testing. Encourage each other if facing any problems
3. Document the code and project to ensure it can be maintained and updated in the future
4. Continuously communicate and collaborate to ensure the project is progressing as planned
5. Have a regular meeting every three days to update on the progress. Usually, regular meetings will last for one hour

---

## LicenseThis project was created for educational purposes as part of CSCI 4453.
