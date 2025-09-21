# Designer's Essence - Payment Integration

A complete payment verification system with Firebase Google Login and Razorpay integration.

## Features

✅ **Firebase Google Authentication**
- Secure Google login/logout
- User session management
- Firebase integration

✅ **Razorpay Payment Integration**
- Payment verification system
- Manual and automatic verification
- Secure payment status storage

✅ **Premium Content Access**
- Google Drive folder access after payment
- Payment status persistence
- User-specific access control

## File Structure

- `index.html` - Main page with login and payment flow
- `payment-verify.html` - Payment verification page
- `access.html` - Premium content access page (optional)

## How It Works

1. **User Login**: User logs in with Google account via Firebase
2. **Payment Check**: System checks if user has completed payment
3. **Payment Flow**: If not paid, redirect to Razorpay payment link
4. **Verification**: After payment, verify with Razorpay (manual/auto)
5. **Access**: Verified users get access to Google Drive content

## Payment Flow

```
Login → Check Payment Status → 
├── Paid: Show Google Drive Access
└── Not Paid: Show Payment Button → 
    Razorpay Payment → Verification → Access
```

## Razorpay Configuration

- **Live Key ID**: `rzp_live_RJn6bJb2qAHcuW`
- **Payment Link**: https://rzp.io/rzp/LyyWIzu
- **Google Drive**: https://drive.google.com/drive/folders/1X3dNJNtGM7x18KRAIyP0SA0J4dEqWfxz

## Deployment

1. Deploy to Vercel/Netlify/GitHub Pages
2. Ensure Firebase configuration is correct
3. Test payment flow with Razorpay test/live environment

## Security Notes

⚠️ **Important**: The Razorpay secret key should be moved to a backend service for production use. Currently implemented for demo purposes.

## Testing

1. Open the application
2. Login with Google
3. Click "Pay Now" (opens Razorpay link)
4. Complete payment
5. Return to verification page
6. Verify payment manually or automatically
7. Access premium content

## Local Development

```bash
# Serve locally
python -m http.server 8000
# or
npx serve .
```

Open http://localhost:8000 to test.