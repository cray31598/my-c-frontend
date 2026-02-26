/**
 * Three questionnaires for the Business Experience Assessment.
 * Each has a title and 8 questions; each question has 4–7 answer options.
 */
export const QUESTIONNAIRES = [
  {
    id: 'leadership',
    title: 'Leadership & Strategic Decision-Making',
    description: 'Assess your approach to leading teams and making high-stakes decisions.',
    questions: [
      {
        id: 1,
        text: 'When multiple stakeholders disagree on strategic direction, how do you typically reach a decision?',
        answers: [
          { id: 'a', text: 'Convene a structured workshop to align on criteria and options, then decide with clear ownership.' },
          { id: 'b', text: 'Escalate to the most senior sponsor and support their final call.' },
          { id: 'c', text: 'Make the decision yourself based on data and communicate the rationale afterward.' },
          { id: 'd', text: 'Pilot a small-scale test and let results drive the decision.' },
          { id: 'e', text: 'Defer until there is broader consensus to avoid conflict.' },
        ],
      },
      // {
      //   id: 2,
      //   text: 'How do you prioritize initiatives when resources are limited and several projects are critical?',
      //   answers: [
      //     { id: 'a', text: 'Use a scoring matrix (impact, urgency, effort) and align with leadership.' },
      //     { id: 'b', text: 'Focus on what the highest-ranking sponsor has asked for.' },
      //     { id: 'c', text: 'Sequence by dependencies and regulatory or contractual deadlines first.' },
      //     { id: 'd', text: 'Run a short prioritization session with key leads and document trade-offs.' },
      //     { id: 'e', text: 'Spread resources across all critical projects and adjust as issues arise.' },
      //     { id: 'f', text: 'Pause non-critical work and concentrate on the top two initiatives.' },
      //   ],
      // },
      // {
      //   id: 3,
      //   text: 'When a direct report is underperforming, what is your usual first step?',
      //   answers: [
      //     { id: 'a', text: 'Schedule a private conversation to understand barriers and agree on expectations.' },
      //     { id: 'b', text: 'Document specific gaps and set a short-term improvement plan with check-ins.' },
      //     { id: 'c', text: 'Escalate to HR and follow formal performance procedures.' },
      //     { id: 'd', text: 'Increase oversight and assign a peer mentor.' },
      //     { id: 'e', text: 'Reassign responsibilities to better match their strengths.' },
      //     { id: 'f', text: 'Give more time and support before any formal action.' },
      //   ],
      // },
      // {
      //   id: 4,
      //   text: 'How do you communicate a major organizational change to your team?',
      //   answers: [
      //     { id: 'a', text: 'Share the rationale, timeline, and impact in a town hall, then hold Q&A and 1:1s.' },
      //     { id: 'b', text: 'Send a detailed email and follow up with team meetings.' },
      //     { id: 'c', text: 'Brief managers first and have them cascade the message.' },
      //     { id: 'd', text: 'Announce in phases: why first, then what and when.' },
      //     { id: 'e', text: 'Use multiple channels (email, meetings, FAQ) and repeat key messages.' },
      //   ],
      // },
      // {
      //   id: 5,
      //   text: 'You have to choose between meeting a deadline with reduced quality or delaying to meet standards. What do you do?',
      //   answers: [
      //     { id: 'a', text: 'Clarify with the client or sponsor which outcome they prefer and document it.' },
      //     { id: 'b', text: 'Deliver on time and schedule a follow-up phase to reach full quality.' },
      //     { id: 'c', text: 'Request a short extension with a clear plan to meet standards.' },
      //     { id: 'd', text: 'Meet the deadline and document known gaps and a remediation plan.' },
      //     { id: 'e', text: 'Escalate to leadership and let them decide.' },
      //     { id: 'f', text: 'Delay delivery and communicate the reason and new date early.' },
      //   ],
      // },
      // {
      //   id: 6,
      //   text: 'How do you build accountability in a cross-functional project team?',
      //   answers: [
      //     { id: 'a', text: 'Define clear owners and deliverables per workstream and review in weekly syncs.' },
      //     { id: 'b', text: 'Use a RACI and a shared tracker visible to all.' },
      //     { id: 'c', text: 'Run kickoff and milestone meetings with explicit commitments.' },
      //     { id: 'd', text: 'Assign a single point of contact per function and hold them responsible.' },
      //     { id: 'e', text: 'Rely on existing reporting lines and avoid duplicating governance.' },
      //   ],
      // },
      // {
      //   id: 7,
      //   text: 'When you receive conflicting feedback from senior leaders on the same initiative, how do you proceed?',
      //   answers: [
      //     { id: 'a', text: 'Arrange a joint discussion to align on one set of expectations.' },
      //     { id: 'b', text: 'Follow the person with formal authority over the initiative.' },
      //     { id: 'c', text: 'Summarize both views and propose a path that addresses the main concerns.' },
      //     { id: 'd', text: 'Escalate to their common manager for a decision.' },
      //     { id: 'e', text: 'Implement the feedback that best matches organizational goals and document the choice.' },
      //     { id: 'f', text: 'Pause the initiative until alignment is reached.' },
      //   ],
      // },
      // {
      //   id: 8,
      //   text: 'How do you decide when to delegate versus handle something yourself?',
      //   answers: [
      //     { id: 'a', text: 'Delegate when someone has the skills and capacity; retain only strategic or irreversible decisions.' },
      //     { id: 'b', text: 'Keep client- or executive-facing decisions; delegate execution and analysis.' },
      //     { id: 'c', text: 'Delegate more over time as trust and capability are proven.' },
      //     { id: 'd', text: 'Use a simple matrix: impact and risk level determine who decides.' },
      //     { id: 'e', text: 'Delegate routine work; personally handle anything new or sensitive.' },
      //     { id: 'f', text: 'Prefer delegation to develop the team, with clear guardrails and checkpoints.' },
      //   ],
      // },
    ],
  },
  {
    id: 'communication',
    title: 'Communication & Stakeholder Management',
    description: 'Evaluate how you communicate and work with internal and external stakeholders.',
    questions: [
      {
        id: 1,
        text: 'A key stakeholder frequently misses deadlines and blames others. How do you address it?',
        answers: [
          { id: 'a', text: 'Have a direct conversation with agreed deadlines and follow-up in writing.' },
          { id: 'b', text: 'Involve their manager in a tri-party discussion with clear expectations.' },
          { id: 'c', text: 'Document delays and impact and share with project governance.' },
          { id: 'd', text: 'Build buffer into the plan and escalate only if it continues.' },
          { id: 'e', text: 'Reduce dependency on them by reassigning critical path work.' },
          { id: 'f', text: 'Offer support (e.g. reminders, templates) before escalating.' },
        ],
      },
      // {
      //   id: 2,
      //   text: 'How do you prepare for a difficult conversation with a client about a missed commitment?',
      //   answers: [
      //     { id: 'a', text: 'Gather facts, root cause, and a recovery plan; rehearse key messages and empathy.' },
      //     { id: 'b', text: 'Align internally on what we can offer (timeline, scope, compensation) before the call.' },
      //     { id: 'c', text: 'Lead with an apology and a clear plan; avoid blame.' },
      //     { id: 'd', text: 'Bring a senior sponsor if the relationship or contract is at risk.' },
      //     { id: 'e', text: 'Send a short written summary first, then schedule a call to discuss.' },
      //   ],
      // },
      // {
      //   id: 3,
      //   text: 'You need buy-in from a skeptical executive for a new initiative. What do you do first?',
      //   answers: [
      //     { id: 'a', text: 'Understand their concerns in a 1:1 and tailor the business case to their priorities.' },
      //     { id: 'b', text: 'Prepare a concise deck with benefits, risks, and ask; request a short meeting.' },
      //     { id: 'c', text: 'Identify a peer or sponsor they trust to co-present or endorse.' },
      //     { id: 'd', text: 'Run a pilot and use results to demonstrate value before asking for full support.' },
      //     { id: 'e', text: 'Address likely objections upfront and offer to deep-dive on any area.' },
      //     { id: 'f', text: 'Share a one-pager in advance and follow up with a discussion.' },
      //   ],
      // },
      // {
      //   id: 4,
      //   text: 'How do you keep remote or distributed team members feeling included and informed?',
      //   answers: [
      //     { id: 'a', text: 'Regular all-hands, async updates, and deliberate inclusion in decisions and recognition.' },
      //     { id: 'b', text: 'Weekly team calls with a consistent agenda and shared notes.' },
      //     { id: 'c', text: 'Use a single channel (e.g. Teams/Slack) for announcements and key decisions.' },
      //     { id: 'd', text: 'Rotate meeting times and ensure everyone has a chance to contribute.' },
      //     { id: 'e', text: 'Short daily or biweekly check-ins plus written summaries.' },
      //     { id: 'f', text: 'Document decisions and rationale so remote members can stay in the loop asynchronously.' },
      //   ],
      // },
      // {
      //   id: 5,
      //   text: 'After a project failure, how do you communicate with stakeholders?',
      //   answers: [
      //     { id: 'a', text: 'Acknowledge the outcome, explain causes and lessons, and share the remediation plan.' },
      //     { id: 'b', text: 'Present a post-mortem with root cause and preventive actions.' },
      //     { id: 'c', text: 'Notify key stakeholders first, then a broader group with a consistent message.' },
      //     { id: 'd', text: 'Focus on what was learned and how we will do better next time.' },
      //     { id: 'e', text: 'Avoid blame; emphasize ownership and next steps.' },
      //   ],
      // },
      // {
      //   id: 6,
      //   text: 'How do you handle a situation where two peers are in conflict and it affects delivery?',
      //   answers: [
      //     { id: 'a', text: 'Facilitate a private conversation focused on interests and outcomes, not blame.' },
      //     { id: 'b', text: 'Clarify roles and handoffs so the work can proceed while they resolve the conflict.' },
      //     { id: 'c', text: 'Escalate to their manager with a factual summary and impact.' },
      //     { id: 'd', text: 'Offer to mediate or bring in a neutral third party.' },
      //     { id: 'e', text: 'Set a short-term workaround and a deadline for them to align.' },
      //     { id: 'f', text: 'Document expectations and hold a joint meeting to agree on next steps.' },
      //   ],
      // },
      // {
      //   id: 7,
      //   text: 'What is your approach to giving constructive feedback to a colleague?',
      //   answers: [
      //     { id: 'a', text: 'Do it in private, be specific and behavior-focused, and suggest one clear improvement.' },
      //     { id: 'b', text: 'Use a simple framework: what went well, what to change, and why it matters.' },
      //     { id: 'c', text: 'Ask for permission first and tie feedback to shared goals.' },
      //     { id: 'd', text: 'Give it soon after the situation and offer to help with the change.' },
      //     { id: 'e', text: 'Balance with recognition so the person does not feel only criticized.' },
      //     { id: 'f', text: 'Put it in writing if it is serious or needs to be referenced later.' },
      //   ],
      // },
      // {
      //   id: 8,
      //   text: 'How do you ensure your message is understood in a multicultural or multilingual context?',
      //   answers: [
      //     { id: 'a', text: 'Use clear, simple language and avoid jargon; confirm understanding with questions.' },
      //     { id: 'b', text: 'Provide a short written summary and offer to clarify in a follow-up.' },
      //     { id: 'c', text: 'Use visuals and examples where possible; check for cultural assumptions.' },
      //     { id: 'd', text: 'Allow time for questions and repeat key points in different ways.' },
      //     { id: 'e', text: 'Ask a local or cultural advisor to review important communications.' },
      //     { id: 'f', text: 'Prefer written communication so people can read at their own pace.' },
      //     { id: 'g', text: 'Follow up in the recipient’s preferred language if feasible.' },
      //   ],
      // },
    ],
  },
  {
    id: 'operational',
    title: 'Operational Excellence & Adaptability',
    description: 'Explore how you drive efficiency, manage change, and adapt to new situations.',
    questions: [
      {
        id: 1,
        text: 'A core process is causing repeated errors. How do you approach fixing it?',
        answers: [
          { id: 'a', text: 'Map the process, identify root causes, then design and test improvements.' },
          { id: 'b', text: 'Convene the people who do the work and iterate on a solution together.' },
          { id: 'c', text: 'Introduce quick wins (checklists, templates) while planning a longer fix.' },
          { id: 'd', text: 'Document the current state and get leadership sign-off before changing.' },
          { id: 'e', text: 'Pilot a new process in one team or region before rolling out.' },
          { id: 'f', text: 'Add controls and reviews first to reduce risk, then simplify the process.' },
        ],
      },
      // {
      //   id: 2,
      //   text: 'You are asked to implement a change you believe will hurt performance. What do you do?',
      //   answers: [
      //     { id: 'a', text: 'Share your analysis and concerns with the decision-maker and suggest alternatives.' },
      //     { id: 'b', text: 'Implement as asked but document risks and track outcomes.' },
      //     { id: 'c', text: 'Request a pilot to validate impact before full rollout.' },
      //     { id: 'd', text: 'Comply and focus on mitigating negative effects where possible.' },
      //     { id: 'e', text: 'Escalate with data and ask for a review of the decision.' },
      //     { id: 'f', text: 'Align with peers and present a joint recommendation.' },
      //   ],
      // },
      // {
      //   id: 3,
      //   text: 'How do you balance standardization across locations with local flexibility?',
      //   answers: [
      //     { id: 'a', text: 'Define non-negotiables (compliance, brand, core process) and allow flexibility elsewhere.' },
      //     { id: 'b', text: 'Create a framework and let local teams adapt with approval for exceptions.' },
      //     { id: 'c', text: 'Standardize where it clearly adds value; leave the rest to local choice.' },
      //     { id: 'd', text: 'Document local variations and review periodically for alignment.' },
      //     { id: 'e', text: 'Use pilots in a few locations before locking global standards.' },
      //     { id: 'f', text: 'Establish a governance group with local representation to agree on standards.' },
      //   ],
      // },
      // {
      //   id: 4,
      //   text: 'A critical system will be down for maintenance during business hours. How do you manage it?',
      //   answers: [
      //     { id: 'a', text: 'Communicate early, define a window, provide workarounds, and confirm recovery.' },
      //     { id: 'b', text: 'Schedule during low-usage periods and get sign-off from key users.' },
      //     { id: 'c', text: 'Publish a status page and support channel for the outage.' },
      //     { id: 'd', text: 'Run a rehearsal and have a rollback plan.' },
      //     { id: 'e', text: 'Notify clients or partners if they are affected.' },
      //   ],
      // },
      // {
      //   id: 5,
      //   text: 'How do you stay current with industry and role-relevant changes?',
      //   answers: [
      //     { id: 'a', text: 'Dedicate time weekly to reading, podcasts, or courses and apply one takeaway.' },
      //     { id: 'b', text: 'Attend 1–2 conferences or events per year and follow key thought leaders.' },
      //     { id: 'c', text: 'Participate in internal or external networks and share learnings with the team.' },
      //     { id: 'd', text: 'Use internal learning platforms and mandatory training as a baseline.' },
      //     { id: 'e', text: 'Ask for stretch assignments that force new skills.' },
      //     { id: 'f', text: 'Set a learning goal per quarter and track it in your development plan.' },
      //   ],
      // },
      // {
      //   id: 6,
      //   text: 'You inherit a team with low morale and high turnover. What do you do in the first 90 days?',
      //   answers: [
      //     { id: 'a', text: 'Listen in 1:1s and group sessions to understand concerns, then act on quick wins.' },
      //     { id: 'b', text: 'Clarify goals, roles, and expectations and reduce unnecessary workload where possible.' },
      //     { id: 'c', text: 'Focus on recognition, fairness, and career conversations.' },
      //     { id: 'd', text: 'Address obvious process or tool pain points first.' },
      //     { id: 'e', text: 'Bring in HR to run a pulse survey and act on the results.' },
      //     { id: 'f', text: 'Be visible and consistent; avoid big structural changes until trust is higher.' },
      //   ],
      // },
      // {
      //   id: 7,
      //   text: 'How do you decide when to invest in automation versus keeping a manual process?',
      //   answers: [
      //     { id: 'a', text: 'Estimate volume, error cost, and labor cost; automate when ROI is clear and stable.' },
      //     { id: 'b', text: 'Automate repetitive, rule-based work first; leave judgment-heavy steps to people.' },
      //     { id: 'c', text: 'Pilot automation in one area and measure time and quality before scaling.' },
      //     { id: 'd', text: 'Consider maintenance and change frequency; avoid automating something that changes often.' },
      //     { id: 'e', text: 'Get user input on pain points before designing the solution.' },
      //     { id: 'f', text: 'Balance quick wins with a roadmap for larger automation.' },
      //   ],
      // },
      // {
      //   id: 8,
      //   text: 'A major external event (e.g. regulation, market shift) forces a change in strategy. How do you respond?',
      //   answers: [
      //     { id: 'a', text: 'Assess impact quickly, communicate to the team, and adjust plans and priorities.' },
      //     { id: 'b', text: 'Convene leads to revise roadmap and reallocate resources.' },
      //     { id: 'c', text: 'Update stakeholders and clients on implications and new timelines.' },
      //     { id: 'd', text: 'Protect critical deliverables and pause or descope the rest as needed.' },
      //     { id: 'e', text: 'Document assumptions and decisions for future reference.' },
      //     { id: 'f', text: 'Run a short lessons-learned after the transition to capture what worked.' },
      //   ],
      // },
    ],
  },
]

/** @deprecated Use QUESTIONNAIRES and flatten if needed. */
export const QUESTIONS = QUESTIONNAIRES.flatMap((q) => q.questions)
