# e-Tapalwala - WhatsApp Messaging System

A comprehensive WhatsApp messaging system for government departments to send PDF documents and messages to citizens.

## Features

### Clerk Dashboard
- **Single WhatsApp Message**: Send PDF documents to individual recipients
- **Bulk WhatsApp Messages**: Send PDF documents to multiple recipients via CSV file
- **Department-based PDF Selection**: Select PDFs from department-specific folders
- **Auto-scheduled Sending**: Automatic date/time population with Indian timezone
- **Real-time Notifications**: Track pending files and message status

### Admin Dashboard
- **Messaging Logs**: View all sent messages with delivery status
- **Clerk Management**: Create, edit, and manage clerk accounts
- **WhatsApp Settings**: Configure WhatsApp Business API credentials
- **Message Proof**: View conversation history and delivery confirmations

## Technology Stack

### Backend
- Node.js with Express.js
- TypeScript
- MongoDB with Mongoose
- WhatsApp Cloud API integration
- Multer for file uploads
- JWT authentication

### Frontend
- React 19 with TypeScript
- React Router for navigation
- Tailwind CSS for styling
- Axios for API calls
- Lucide React for icons

## Project Structure

```
etapalwala/
├── backend/
│   ├── src/
│   │   ├── models/          # Database models
│   │   ├── routes/          # API routes
│   │   ├── services/        # Business logic
│   │   ├── middleware/      # Authentication middleware
│   │   └── utils/           # Utility functions
│   ├── Departments/         # PDF storage folders
│   │   ├── Department_1/    # D1 department files
│   │   ├── Department_2/    # D2 department files
│   │   └── Department_3/    # D3 department files
│   └── uploads/             # Temporary file storage
└── frontend/
    ├── src/
    │   ├── components/      # React components
    │   ├── pages/           # Page components
    │   ├── services/        # API services
    │   ├── contexts/        # React contexts
    │   └── utils/           # Utility functions
    └── public/              # Static assets
```

## Installation & Setup

### Prerequisites
- Node.js (v20+)
- MongoDB
- WhatsApp Business API credentials

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/etapalwala
JWT_SECRET=your_jwt_secret
WHATSAPP_ACCESS_TOKEN=your_whatsapp_token
WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id
CORS_ORIGINS=http://localhost:5173
```

5. Start the backend server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Usage

### Accessing the Application

1. Open your browser and navigate to `http://localhost:5173`
2. Login with your credentials:
   - **Admin**: Full access to all features
   - **Clerk**: Access to messaging features only

### Clerk Workflow

#### Single Message
1. Select department from dropdown
2. Choose PDF from department folder (modal will open)
3. Enter recipient's mobile number with country code
4. Date and time are auto-populated with Indian timezone
5. Click "Send WhatsApp Message"

#### Bulk Message
1. Select department from dropdown
2. Upload CSV file with mobile numbers
3. Upload multiple PDF files
4. Date and time are auto-populated
5. Click "Send Bulk WhatsApp Messages"

### Admin Workflow

#### Managing Clerks
1. Navigate to "Clerk Management"
2. Click "Add Clerk" to create new accounts
3. Edit or delete existing clerk accounts

#### Viewing Message Logs
1. Navigate to "Messaging Logs"
2. Use filters to search by department, status, or date
3. View delivery statistics and message details

#### Configuring WhatsApp
1. Navigate to "WhatsApp Settings"
2. Enter your WhatsApp Business API credentials
3. Save configuration

## Department Structure

The system uses a folder-based approach for organizing PDFs:

- **Department_1** (D1): Contains PDFs for Department 1
- **Department_2** (D2): Contains PDFs for Department 2  
- **Department_3** (D3): Contains PDFs for Department 3

Each department folder should contain:
- PDF documents for distribution
- Excel/CSV files with mobile numbers (for bulk messaging)

## API Endpoints

### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration

### Messaging
- `POST /send/single-document` - Send single PDF
- `POST /send/csv-bulk-document` - Send bulk PDFs
- `GET /send/messages` - Get message logs
- `GET /send/messages-stats` - Get message statistics

### Admin
- `GET /admin/departments` - Get departments
- `GET /admin/departments/:code/files` - Get department files
- `GET /admin/users` - Get users
- `POST /admin/users` - Create user
- `DELETE /admin/users/:id` - Delete user

## File Upload Requirements

### CSV Format for Bulk Messaging
The CSV file should contain a column named `mobile` with phone numbers in international format:
```csv
mobile
+919876543210
+919876543211
+919876543212
```

### PDF Requirements
- File format: PDF only
- Maximum size: 10MB
- Files are automatically deleted after successful sending

## Security Features

- JWT-based authentication
- Role-based access control (Admin/Clerk)
- CORS protection
- File type validation
- Input sanitization

## Troubleshooting

### Common Issues

1. **CORS Error**: Ensure backend CORS_ORIGINS includes frontend URL
2. **WhatsApp API Error**: Verify access token and phone number ID
3. **File Upload Error**: Check file size and format requirements
4. **Database Connection**: Ensure MongoDB is running and accessible

### Logs
- Backend logs: Check console output
- Frontend logs: Check browser developer console
- WhatsApp API logs: Check message status in admin dashboard

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team.
