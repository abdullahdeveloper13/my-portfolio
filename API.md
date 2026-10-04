# Portfolio API

All responses use `{ success, data }` on success and `{ success: false, error: { code, message } }` on failure.

| Endpoint | Method | Purpose | Auth |
|---|---|---|---|
| `/api/health` | GET | API and database health | No |
| `/api/projects` | GET | Featured projects ordered for the public site | No |
| `/api/technologies` | GET | Technology toolkit | No |
| `/api/experience` | GET | Experience timeline | No |
| `/api/contact` | POST | Validate and persist a contact message; optionally notify via Resend | No, rate limited |
| `/api/admin/login` | POST | Create signed HTTP-only admin session. Body: `{ email, password }` | No |
| `/api/admin/logout` | POST | Clear admin session | Session |
| `/api/admin/stats` | GET | Database counts for the dashboard | Session |

`POST /api/contact` expects `name`, `email`, `subject`, and `message`. Validation is defined in `lib/validation.ts`; credentials and database details never enter the browser.
