# 📝 Notes Manager App

A simple and lightweight Notes Manager built with React. This application allows users to add, delete, and manage notes efficiently.

## 🚀 Features

- ➕ Add new notes
- 🗑️ Delete individual notes
- 🧹 Clear all notes with confirmation
- 📊 Display total number of notes
- ⚡ Built using React Hooks (`useState`)
- 🔑 Unique note IDs generated using `crypto.randomUUID()`

## 📸 Preview

Users can:

1. Enter a note in the input field.
2. Click **Add** to save the note.
3. View all notes in a numbered list.
4. Delete individual notes.
5. Clear the entire list using the **Clear List** button.

---

## 🛠️ Technologies Used

- React
- JavaScript (ES6+)
- CSS
- HTML

---

## 📂 Project Structure

```text
src/
│
├── App.js
│
├── Components
│   ├── Logo
│   ├── Form
│   ├── NoteList
│   ├── Item
│   └── Stats
│
└── styles.css
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/notes-manager-app.git
```

### Navigate to the project folder

```bash
cd notes-manager-app
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm start
```

The application will run on:

```text
http://localhost:3000
```

---

## 📖 Usage

### Add a Note

- Type your note in the input field.
- Click **Add**.

### Delete a Note

- Click the **Delete** button next to any note.

### Clear All Notes

- Click **Clear List**.
- Confirm the action in the popup dialog.

---

## 🧠 State Management

The application uses React's `useState` hook for managing:

| State         | Purpose                        |
| ------------- | ------------------------------ |
| `notes`       | Stores all notes               |
| `description` | Stores the current input value |

---

## 🔍 Key Functions

### `handleAddNotes(note)`

Adds a new note to the notes array.

```javascript
setNotes((notes) => [...notes, note]);
```

### `handleDeleteNotes(id)`

Removes a note based on its unique ID.

```javascript
setNotes((notes) => notes.filter((note) => note.id !== id));
```

### `handleClearList()`

Clears all notes after user confirmation.

```javascript
if (confirmed) setNotes([]);
```

---

## 🎯 Future Improvements

- Edit existing notes
- Local Storage persistence
- Search notes
- Sort notes by date
- Dark mode support
- Categories and tags

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/new-feature
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push to the branch.

```bash
git push origin feature/new-feature
```

5. Open a Pull Request.

---
