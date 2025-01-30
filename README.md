# Dynamic Form Builder

A React-based dynamic form builder that enables users to create custom forms through an intuitive button-based interface. This project allows users to build forms with various field types, edit their properties in real-time, and persist form structures locally.

## ✨ Key Features

- **Button-Based Field Addition**
  - Text Input fields
  - Dropdown menus
  - Checkboxes
  - Button elements
  - Textarea
  - Radio
- **Field Property Customization**
  - Edit field labels
  - Set placeholder text
  - Toggle required status
  - Configure dropdown options
- **Real-Time Form Preview**
  - Side-by-side preview panel
  - Instant updates as you build
- **Form Validation**
  - Client-side validation using React Hook Form
  - Schema validation with Zod
  - Required field handling
  - Custom validation rules
- **Local Storage Integration**
  - Automatic saving of form structure
  - Form state persistence across page refreshes
  - No data loss during browser sessions

## 🛠️ Tech Stack

- **React** - UI component library
- **TypeScript** - Static typing and enhanced IDE support
- **Vite** - Fast build tooling and development server
- **React Hook Form** - Form state and validation management
- **Zod** - Schema declaration and validation
- **Local Storage API** - Client-side data persistence
- **Tailwind CSS** - Utility-first styling

## 🚀 Getting Started

1. Clone the repository

## 💡 Usage

1. **Adding Form Fields**

   - Click the "+ Add Text Input" button to add a text field
   - Use "+ Add Dropdown" for dropdown menus
   - Add checkboxes with "+ Add Checkbox"
   - Insert buttons using "+ Add Button"
   - Add textarea with "+ Add Textarea"
   - Add radio with "+ Add Radio"

2. **Editing Field Properties**

   - Click on any field to open its properties panel
   - Modify labels, placeholders, and required status
   - Configure dropdown options for select fields

3. **Form Preview**
   - View your form in real-time in the right preview panel
   - Test field interactions and validation

## 🎯 Implementation Challenges & Solutions

### 1. State Management

**Challenge:** Managing complex form state with multiple field types and properties.
**Solution:** Implemented a structured state management system using React's useState and custom hooks, with TypeScript interfaces ensuring type safety.

### 2. Real-Time Preview

**Challenge:** Maintaining synchronization between the builder and preview panels.
**Solution:** Created a shared state context that updates the preview component whenever form structure changes.

### 3. Local Storage Integration

**Challenge:** Efficiently storing and retrieving complex form structures.
**Solution:** Implemented JSON serialization/deserialization with proper type checking and error handling for robust storage management.

### 4. Form Validation

**Challenge:** Creating dynamic validation rules for different field types.
**Solution:** Leveraged Zod's schema building capabilities to generate validation rules based on field properties.

Built with 💻 by Milan Praz
