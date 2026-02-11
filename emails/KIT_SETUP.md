# Kit (ConvertKit) Setup Guide for Run AI Welcome Sequence

Step-by-step instructions for connecting your landing page forms to Kit and automating the 5-email welcome sequence.

---

## 1. Create a Form in Kit

1. Log in to Kit at app.kit.com.
2. Go to Grow > Landing Pages and Forms.
3. Click "Create new" and select "Form".
4. Choose "Inline" as the format.
5. Add two fields:
   - First name (text field)
   - Email address (email field, required)
6. Set the success message to: "Check your inbox. Your welcome email is on its way."
7. Name the form "Run AI - Landing Page Signup" (you will create a second form later for the audit).
8. Save the form.

## 2. Copy the Form Action URL

1. In your form settings, click "HTML/CSS" under the embed options.
2. Look for the form action URL. It will look something like:
   `https://app.kit.com/forms/XXXXXXX/subscriptions`
3. Copy this URL. You will need it for both integration points in index.html.

## 3. Create a Second Form for the Audit Modal

1. Repeat steps 1 through 6 above.
2. Name this form "Run AI - Audit Signup".
3. Copy its form action URL as well.
4. This allows you to tag and track subscribers differently based on where they signed up.

## 4. Connect the Forms to index.html

Your index.html has TWO integration points. Both are clearly marked with comments in the code.

### Integration Point 1: Main Lead Capture Form (Section 7)

Location: index.html, inside the `mainLeadForm` submit handler (around line 394).

Look for this comment block:

```
/* --------------------------------------------------------
 * Integration point: Send name + email to your email
 * provider (ConvertKit, Mailchimp, Skool API).
 *
 * Example:
 *   fetch('https://your-api.com/subscribe', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify({ name: name, email: email })
 *   });
 * ------------------------------------------------------- */
```

Replace the `console.log` line below that comment with:

```javascript
fetch('https://app.kit.com/forms/YOUR_LANDING_PAGE_FORM_ID/subscriptions', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email_address: email,
    first_name: name,
    tags: ['landing-page-signup']
  })
});
```

Replace `YOUR_LANDING_PAGE_FORM_ID` with the actual form ID from Step 2.

### Integration Point 2: Audit Modal Email Form

Location: audit.js, inside the `handleEmailSubmit` function (around line 299).

Look for this comment block:

```
/* --------------------------------------------------------
 * Integration point: Send name + email + score to your
 * email provider here (ConvertKit, Mailchimp, Skool API).
 *
 * Example:
 *   fetch('https://your-api.com/subscribe', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify({ name: name, email: email, score: calculateScore(), level: getLevel().name })
 *   });
 * ------------------------------------------------------- */
```

Replace the `console.log` line below that comment with:

```javascript
fetch('https://app.kit.com/forms/YOUR_AUDIT_FORM_ID/subscriptions', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email_address: email,
    first_name: name,
    tags: ['audit-signup'],
    fields: {
      ai_readiness_score: calculateScore().toString(),
      ai_readiness_level: getLevel().name
    }
  })
});
```

Replace `YOUR_AUDIT_FORM_ID` with the actual form ID from Step 3.

## 5. Set Up the Automation (Welcome Sequence)

1. In Kit, go to Automate > Visual Automations.
2. Click "New Automation".
3. Set the trigger: "Subscribes to a form" and select both forms (Landing Page Signup and Audit Signup).
4. Add the 5 emails in sequence with the following delays:

| Step | Email | Delay | File |
|------|-------|-------|------|
| 1 | Welcome | Immediately | 01-welcome.md |
| 2 | Lynden's Story | Wait 1 day | 02-lyndens-story.md |
| 3 | Quick Win | Wait 2 days | 03-quick-win.md |
| 4 | AI Readiness Audit | Wait 2 days | 04-ai-readiness-audit.md |
| 5 | The Road Ahead | Wait 2 days | 05-road-ahead.md |

The delays are cumulative from the previous step, giving you:
- Email 1: Immediate
- Email 2: Day 1
- Email 3: Day 3
- Email 4: Day 5
- Email 5: Day 7

5. For each email step, click "Send email", then paste the subject line and body from the corresponding file.
6. Use the first subject line option from each file as the default. You can A/B test the alternatives later.
7. Set the sender name to "Lynden from Run AI" and the reply-to address to your preferred email.

## 6. Tag Subscribers by Signup Source

Create three tags in Kit (under Subscribers > Tags):

- **landing-page-signup** for people who sign up via the main lead capture form on index.html.
- **audit-signup** for people who sign up via the audit modal email form.
- **seo-signup** for people who sign up via forms on the SEO content pages (how-to-use-ai-for-lesson-planning.html, ai-tools-for-primary-teachers.html, ai-cpd-for-schools.html).

These tags are applied automatically via the JavaScript `fetch` calls above (see the `tags` array in each request body).

For the SEO pages, when you add forms to those pages, use the same pattern but set the tag to `seo-signup`:

```javascript
tags: ['seo-signup']
```

This lets you:
- See which signup source converts best.
- Send different follow-up content based on how someone found you.
- Track audit completion separately from general signups.

## 7. Important Notes

- Kit uses `{{ subscriber.first_name }}` for personalisation in email templates. The email files in this folder use that syntax already.
- If a subscriber signs up through both the landing page and the audit, Kit will not duplicate them. It will add both tags to the same subscriber and they will only receive the welcome sequence once.
- Test the full sequence by subscribing with a personal email address before going live.
- Check that emails are not landing in spam. Add your sending domain to Kit and verify DNS records (SPF, DKIM, DMARC) for best deliverability.
- The `[AUDIT LINK]` placeholder in email 04 should be replaced with the actual URL of your audit page or a direct link that opens the audit modal on your landing page (e.g., `https://yourdomain.com/#audit` if you set up an anchor trigger).

## 8. Custom Fields for Audit Data

If you want to store audit scores in Kit:

1. Go to Subscribers > Custom Fields.
2. Create two fields:
   - `ai_readiness_score` (text)
   - `ai_readiness_level` (text)
3. These are already referenced in the audit integration code in Step 4 above.
4. You can use these fields to segment subscribers by level and send targeted content later.
