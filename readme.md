# MoneyMonitor

**MoneyMonitor** is a modern, responsive, and user-friendly web application designed to help users manage their personal finances. It allows users to track their income and expenses, categorize transactions, and gain insights into their financial activities. With built-in warnings for overspending, MoneyMonitor ensures you stay on top of your financial goals.

This project is part of the UnifiedMentor internship. Its a ExpenseTracker project specifically part of full stack web development Internship.

---

## Features

- **User Profiles**: Create and manage personalized user profiles, stored and managed using `localStorage`.
- **Transaction Management**: 
  - Add, view, and delete income and expense transactions.
  - Categorize transactions (e.g., Food, Transportation, Entertainment, etc.).
- **Real-time Calculations**: 
  - Calculate and display total income, total expenses, and net income.
  - Update totals dynamically upon adding or deleting transactions.
- **Warnings and Alerts**:
  - "Nearing money overuse" warning when expenses are very high, and net income drops below 1000.
  - "In debt" warning when net income reaches 0 or less.
- **Stylish UI**: Minimalistic and intuitive design using **Tailwind CSS**.
- **Responsive Design**: Works seamlessly across devices.
- **Local Storage**: All data (profiles, transactions, calculations) is saved in the browser's `localStorage`, ensuring persistent and private data without a backend.

---

## Technologies Used

- **HTML**: Structure and layout of the application.
- **Pure JavaScript**: Core logic for managing profiles, transactions, and calculations.
- **Tailwind CSS**: Styling for a modern and responsive user interface.
- **localStorage**: For storing and managing user data on the client-side.

---

## How to Use

1. Clone or download the repository:
   ```bash
   git clone https://github.com/chriswilder3/ExpenseTracker.git
   cd ExpenseTracker

2. Open the index.html file in any browser

3. Start tracking your income, expenses, and manage your financial goals.


## Screenshots

![Index](images/index.png)
![Profiles](images/profiles.png)
![User](images/user.png)
