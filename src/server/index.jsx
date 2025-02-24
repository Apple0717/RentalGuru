import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('http://localhost:5000/alerts', () => {
    return HttpResponse.json([
      {
        "id": 1,
        "message": "AI detected a high-risk payment. Would you like to take action?"
      },
      { 
        "id": 2, 
        "message": "Lease renewal suggested for tenant John Doe." 
      },
      { 
        "id": 3, 
        "message": "Maintenance request requires urgent attention." 
      }
    ])
  })
]