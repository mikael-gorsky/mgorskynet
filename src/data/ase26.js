// ASE-26 — canonical course content.
// Source: "ASE-26: a conceptual framework, curriculum, and teaching foundation
// for agentic software engineering", Version 1.0 (29 May 2026), Mikael Gorsky.
// Reproduced from the deposited document; licensed CC BY-ND 4.0.
// This file is the single source of truth for every /ase26 page.

export const meta = {
  code: 'ASE-26',
  title: 'Agentic Software Engineering',
  subtitle:
    'A conceptual framework, curriculum, and teaching foundation for agentic software engineering',
  author: 'Mikael Gorsky',
  orcid: '0009-0003-2518-9209',
  orcidUrl: 'https://orcid.org/0009-0003-2518-9209',
  version: '1.0',
  released: '29 May 2026',
  doi: '10.5281/zenodo.20468021',
  doiUrl: 'https://doi.org/10.5281/zenodo.20468021',
  license: 'CC BY-ND 4.0',
  licenseName: 'Creative Commons Attribution-NoDerivatives 4.0 International',
  licenseUrl: 'https://creativecommons.org/licenses/by-nd/4.0/',
  citation:
    'Gorsky, M. (2026). ASE-26: A conceptual framework, curriculum, and teaching foundation for agentic software engineering. Version 1.0. Zenodo. https://doi.org/10.5281/zenodo.20468021',
  tagline:
    'The discipline of structured, auditable human-agent workflows for building software.',
  abstract:
    'This document is the comprehensive conceptual framework, curriculum, and teaching foundation for the course ASE-26, which teaches Agentic Software Engineering as the discipline of structured, auditable human-agent workflows for building software. ASE treats the human role as framing, specifying and judging while agents execute. Configuring the agentic development environment, engineering context, and verifying output are first-class engineering activities. The curriculum is organised in 21 modules across four parts and a closing module.',
  audience:
    'Engineering students who already have foundational knowledge of computer science and some experience with software engineering. Also usable as a textbook and as a reference for practitioners building agentic-engineering capability.',
  keywords: [
    'agentic software engineering',
    'agentic coding',
    'vibe coding',
    'LLM-based agents',
    'software engineering education',
    'curriculum',
    'evolutionary spiral',
    'co-evolution of intent and build',
    'auditability',
    'context engineering',
    'verification',
    'multi-agent workflows',
    'MRP',
    'ADE',
    'AgentOps',
  ],
  stats: [
    { value: '21', label: 'Modules' },
    { value: '4', label: 'Parts + closing' },
    { value: '12', label: 'Course outcomes' },
    { value: '50 / 50', label: 'Coursework / project' },
  ],
}

// Top-level navigable sections of the sub-site (the "levels").
export const sections = [
  { slug: '', label: 'Overview', icon: 'home', desc: 'The course at a glance.' },
  { slug: 'conceptual-model', label: 'Conceptual model', icon: 'hub', desc: 'The eight ideas the discipline rests on.' },
  { slug: 'curriculum', label: 'Curriculum', icon: 'list_alt', desc: '21 modules across four parts and a closing module.' },
  { slug: 'outcomes', label: 'Learning outcomes', icon: 'flag', desc: 'What a graduate is able to do.' },
  { slug: 'assessment', label: 'Assessment', icon: 'grading', desc: 'How student work is graded.' },
  { slug: 'tooling', label: 'Tooling reference', icon: 'build', desc: 'Choosing and configuring an ADE.' },
  { slug: 'glossary', label: 'Glossary', icon: 'menu_book', desc: 'The terms central to the discipline.' },
]

export const preface = {
  title: 'Preface',
  body: [
    'Most software engineering curricula today teach what was true five years ago. Code is what students learn to write. Tools are what they learn to use. Patterns and principles are taught as if the work itself were stable. The work is not stable.',
    'In 2025 the practical centre of software development began shifting from typing code to directing agents to type code. By mid-2026 the shift is visible in Anthropic’s measurements of where engineering work actually happens (75 per cent of Computer Programmer tasks now showing AI exposure), in employer practices (rising premiums for engineers who can frame, direct and verify rather than only implement), and in failure data (over two thirds of agent-generated pull requests delayed or unreviewed, true solve rates on real bugs collapsing under audit). The work has changed. The curriculum has not caught up.',
    'ASE-26 catches up. It teaches agentic software engineering as a discipline rather than as the use of a particular product. The principles are the part that lasts. Specific tools change yearly; the structure of human-agent work for building software changes slowly. A student who learns the discipline can pick up next year’s agent and use it well. A student who learns only this year’s tool will need a new course in eighteen months.',
    'The course is designed for engineering students who already have foundational knowledge of computer science and some experience with software engineering. The course presupposes programming, software architecture, and basic engineering practice. What it teaches is what comes next: how to direct LLM-based agents to produce software that meets professional engineering standards, and how to read and evaluate the output of such agents critically. Graduates are equipped to operate productively in organisations that have adopted agentic development workflows, and to evaluate the agentic tooling field critically as it continues to evolve.',
    'This document is the canonical text of the course. It contains the conceptual model the course teaches, a glossary of the terms central to the discipline, the full 21-module curriculum, the learning outcomes, the assessment design, and the tooling reference. The reference list at the end collects the literature the course draws on.',
  ],
}

export const conceptualModel = [
  {
    id: '2.1',
    title: 'ASE as a discipline',
    body: [
      'A casual prompter and an agentic software engineer can sit at the same screen, use the same model, point at the same product, and produce different things. The difference between them is a discipline.',
      'The discipline is the structured, auditable conduct of human-agent work for building software. It has principles, named artefacts, recognised failure modes, and standards a practitioner can be held to. A tool is always involved, but the discipline lives upstream of the tool and survives its replacement.',
      'Tool skill is what a practitioner has after using a product for a while: knowledge of menus, shortcuts, and rough edges. Such knowledge decays the moment the product changes. The discipline does not decay, because it concerns the structure of the human-agent relationship rather than any one form of it.',
      'Casual prompting and engineering can look identical from across the room. The difference shows up when somebody asks, a month later, what was actually requested, why this particular answer came back, and whether anyone is on the hook for it. Casual prompting cannot answer those questions. Engineering must. Specification, verification, and the audit trail are how the discipline answers them.',
    ],
  },
  {
    id: '2.2',
    title: 'The division of labour',
    body: [
      'Three responsibilities belong to the human: framing the problem, specifying what good would look like, and judging what comes back. The agent’s responsibility is execution. Humans bring taste, context, accountability, and the capacity to decide whether the project should exist at all. Agents bring tireless production of plausible artefacts, broad coverage of patterns the human cannot recall, and indifference to fatigue.',
      'The division collapses in predictable ways. The human treats execution as their responsibility, hand-edits the output line by line, and loses the audit trail. The human delegates judgment along with execution and accepts whatever the agent produced. The human delegates framing, lets the agent decide what the problem actually is, and ends up with confident output for the wrong question.',
      'Four structural risks shadow the division even when it is held correctly. Skills no longer practised atrophy. Code produced rapidly through dialog can become opaque to the person who directed it. Accountability gets diffuse when human, agent, model provider, and deploying organisation all contributed. Models reproduce the assumptions of their training corpora. These risks do not disappear with experience. They are managed.',
    ],
  },
  {
    id: '2.3',
    title: 'The auditability principle',
    body: [
      'A workflow that cannot be inspected, replayed, or evaluated after the fact is craft. Engineering is accountable and reproducible. The auditability principle is the discipline’s defining commitment: every workflow must produce a record sufficient for someone other than the original engineer to reconstruct what was decided, why, and what happened.',
      'The artefact that makes the commitment operational is the audit trail. It links intent to specification, to context, to agent trajectory, to output, to verification. A reviewer looking at it later can answer the three questions that distinguish engineering from sophisticated guesswork: was the right problem being solved, did the proposed solution match the specification, and did the actual output pass the gates the specification implied.',
      'Classical software engineering struggled for decades to produce audit trails as a routine matter. Agentic engineering produces them as a byproduct of normal operation. The agent’s reasoning sits in the chat transcript. The tool calls are logged. The artefacts are committed. The verification gates record their own results. The discipline asks for this material to be preserved, named, and made navigable.',
    ],
  },
  {
    id: '2.4',
    title: 'The anatomy of an agentic workflow',
    body: [
      'One turn of the workflow has seven parts. They run as the constituents of a single act rather than as sequential phases.',
      'Intent is the human’s understanding of what is wanted. Specification is the precise document the agent receives, sufficient for it to make autonomous decisions correctly. Context is what the engineer deliberately puts in front of the agent. Plan is the sequence of actions the agent generates given the context. Execution is the agent’s invocation of its tools to act on the world. Verification is the gate the output must pass before it enters the project. The audit trail records the whole thing.',
      'The course teaches one part of the anatomy per module across Part 3. Module 6 develops intent. Module 10 develops specification. Module 11 develops context engineering. Module 12 develops the safety layer that protects execution. Module 13 develops verification. Module 16 develops review. Module 18 returns to the rhythm that connects them into a living project.',
    ],
  },
  {
    id: '2.5',
    title: 'Rationalism, empiricism, and ASE’s position',
    body: [
      'Two positions divide the history of software engineering. The rationalist holds that careful thought yields a design before any code is written, and that the design can be specified completely enough to be implemented faithfully. The empiricist holds that humans are fallible, that intent cannot be fully known before the work begins, and that design must proceed through build-evaluate-revise cycles.',
      'ASE is empiricist by structural necessity. The agent itself behaves empirically. The output of any given prompt is a sample from a probability distribution rather than the deterministic execution of a specification. Tests reveal what the model produced; reasoning about what the model should have produced is insufficient. The agent must be tested, observed, corrected, and tested again.',
      'The position preserves the value of upfront thought. Framing the problem, writing a coherent specification, and curating the context are all upstream work that pays off in fewer wasted turns. The position holds that the upstream work cannot complete itself before the work begins. Specification and build co-evolve.',
    ],
  },
  {
    id: '2.6',
    title: 'The co-evolution of intent and build',
    body: [
      'The problem space and the solution space evolve together rather than in sequence. The framer thinks they want X. The agent produces something resembling X. The framer sees the result and realises what was actually wanted is Y, or X minus some constraint, or X reframed for a different user. The build teaches the framer what the framer wanted.',
      'This claim originates in design research and is established empirically there: studies of expert designers show that requirements emerge from attempted solutions rather than from prior reflection. The position is older than agentic engineering, but agentic engineering is the form of software development in which the claim is most easily observed.',
      'In ASE the chat transcript is the literal mechanism of co-evolution. Each prompt-build cycle is one step. A specification that did not move during the project has not been tested against reality. The discipline asks the framer to let it move, and to record the motion.',
    ],
  },
  {
    id: '2.7',
    title: 'The evolutionary spiral',
    body: [
      'The evolutionary spiral is the operational form the co-evolutionary claim takes. A project runs as a sequence of turns. Inside each turn the work is fast and loose: the agent produces, the human reads, the human asks for revisions, the agent produces again. Between turns the work is pinned down: the specification is updated, the context file absorbs what was learned, what is done is named done, and the next turn begins from a clean restore point.',
      'The architectural contracting analogy carries the idea in a different vocabulary. The client writes a programme of needs rather than a specification of solutions. The architect provides services rather than a finished product. Conceptual designs serve as prototypes. Only at the end of the design process is a fixed-price construction contract signed. The spiral has the same shape: open work inside the turn, contracting between turns, an increasingly definite product over many turns.',
      'Two judgment skills make or break the rhythm. The commit point is the decision at the end of each turn about what to lock, what goes back into the specification, and what remains open. Drift detection is the skill of noticing when the spiral is failing: going in circles, expanding scope, losing its original intent. Both are learned through practice.',
    ],
  },
  {
    id: '2.8',
    title: 'The evolutionary spiral versus spec-driven approaches',
    body: [
      'The evolutionary spiral can be contrasted with spec-driven approaches that treat intent as fixed before the build begins. Spec-driven approaches produce a complete specification first, treat the build as faithful implementation of that specification, and treat any change to the specification mid-build as scope creep to be controlled.',
      'Spec-driven approaches are right about the value of upfront thought. They are right that a well-specified problem produces better output than an underspecified one. They are wrong, in agentic engineering specifically, when they treat the specification as a closed contract. Intent moves under contact with reality, and the spec-driven framing treats this movement as a defect rather than as the central mechanism by which the framer discovers what they wanted.',
      'The evolutionary spiral preserves what is right about spec-driven approaches. Upfront thinking matters. A complete-enough specification produces better turns. What the spiral adds is the recognition that the project lives through multiple turns, that the specification must be allowed to move between turns, and that the audit trail must record the motion.',
    ],
  },
]

export const parts = [
  {
    id: 1,
    title: 'The discipline',
    range: 'Modules 1–5',
    summary:
      'Establishes the discipline, the human role, mental models of agents, the anatomy of an agentic workflow, and the typology of agentic development environments.',
  },
  {
    id: 2,
    title: 'The environment',
    range: 'Modules 6–9',
    summary:
      'Project conception, web application architecture, interface design and documentation, and the architecture of intelligence in software.',
  },
  {
    id: 3,
    title: 'The engineering',
    range: 'Modules 10–18',
    summary:
      'Specifications, context engineering, safety and recovery, verification before trust, multi-agent decomposition and orchestration, review, security and governance — culminating in the evolutionary spiral.',
  },
  {
    id: 4,
    title: 'The market',
    range: 'Modules 19–20',
    summary:
      'The labour market and entrepreneurship in the age of AI coding.',
  },
  {
    id: 'closing',
    title: 'Closing',
    range: 'Module 21',
    summary:
      'How the practitioner keeps their own mental model of the discipline fresh as the underlying technology moves.',
  },
]

export const modules = [
  {
    id: 1,
    part: 1,
    title: 'What is Agentic Software Engineering?',
    subtitle: 'A discipline shift, not a tooling shift.',
    summary:
      'Agentic software engineering is a discipline shift rather than a tooling shift, situated within the historical arc from ENIAC patch cables to vibe coding.',
    body: [
      'Agentic software engineering is a discipline shift rather than a tooling shift. The field can be situated historically (rule-based systems, statistical machine learning, transformers, the agent loop) and conceptually as the move from author-of-code to director-of-workflow. What feels like a sudden shift has a decade of preparation behind it.',
      'The longer arc, running from the 1940s, shows the change is unprecedented in pace alone, not in kind. Programmers in the 1940s mediated intent by physically setting switches and connecting patch cables on machines like the ENIAC. Assembly languages in the 1950s introduced symbolic mnemonics. High-level languages abstracted from hardware. Structured and declarative languages shifted expression from how-to-compute to what-to-compute. Object-oriented programming reorganised intent around entities. Design patterns codified recurring solutions. Low-code and no-code platforms replaced authoring with configuration. Statistical code completion interpreted developer intent from local context. Generative AI extended interpretation to whole functions. Vibe coding from 2025 onward mediates intent through natural language and probabilistic inference rather than deterministic syntax. The current transition is the first to redistribute most of the implementation work to the machine.',
      'The central claim of the course is that what separates professional from amateur use of agents is the presence of structure around the interaction. Over 68% of agent-generated pull requests face long delays or remain unreviewed in practice. True solve rates on real bugs collapse under rigorous audit from apparent success to a fraction of it. The speed-versus-trust gap is the defining tension of the current moment.',
      'The autonomy-level framework for software engineering gives precise vocabulary for where current tools sit and what the next level would require. The levels run from manual coding through task-agentic and goal-agentic assistance to specialized and general domain autonomy. The foundational distinction at the heart of the course is ASE versus casual prompting. A casual prompter gives an agent an instruction and hopes. An agentic software engineer equips the agent and verifies the output.',
    ],
    outcome:
      'The student can articulate why ASE is a discipline shift rather than a tooling shift, situate the current transition within the historical arc from ENIAC patch cables to vibe coding, name the empirical evidence for the speed-versus-trust gap (68% PR delay rate, solve-rate collapse under audit), and apply the autonomy-level framework to any agentic tool.',
  },
  {
    id: 2,
    part: 1,
    title: 'The human role',
    subtitle: 'What erodes and what compounds.',
    summary:
      'What remains irreducibly human in agentic engineering, and what erodes as models improve.',
    body: [
      'The module addresses what remains irreducibly human in agentic engineering, and what erodes as models improve. Developers use AI in roughly 60% of their work, and yet they report being able to fully delegate only a small fraction of tasks. The contradiction resolves once effective AI collaboration is understood to require active human participation. Passive oversight will not produce the same result.',
      'Developer work splits into three categories. Work that erodes: pure implementation of well-specified tasks, boilerplate generation, pattern-matching across large codebases, documentation of known behaviour. Work that is stable: debugging novel failures, evaluating ambiguous trade-offs, organisational navigation. Work that compounds: problem framing, system design, taste, the ability to evaluate agent output with genuine expertise, and the capacity to define what is worth building in the first place. The compounding category becomes more valuable as the eroding category shrinks.',
      'Why some skills compound and others erode is, at root, a question Michael Polanyi described decades ago as tacit knowing. A practitioner knows more than they can tell. The parts of expertise that can be made explicit are the parts a model can learn from training corpora and reproduce. The tacit residue — the judgment and taste and sense of when to stop — is what stays scarce.',
      'Four structural risks shadow the practitioner: erosion of programming expertise, black-box codebases, responsibility gaps, and ecosystem bias. In agentic engineering the human carries accountability for the output regardless of who or what produced it. The responsibility gap closes operationally rather than philosophically, through the audit trail, the specification, and the verification gates.',
      'The compounding skills named here are precisely the skills the industry currently lacks. A 2026 systematic review reports four leading barriers to industrial adoption: trust and reliability (78% of studies), integration with legacy systems (64%), the absence of standardised evaluation methods (59%), and skills gaps in development teams (52%). The market is asking for the discipline this course teaches.',
    ],
    outcome:
      'The student can sort developer work into the three categories (eroding, stable, compounding) with concrete examples, recognise the four structural risks of the discipline (skill erosion, black-box codebases, responsibility gaps, training-data bias), articulate Polanyi’s residue as the conceptual ground for the compounding category, and name the four barriers to industrial adoption identified in the 2026 systematic review.',
  },
  {
    id: 3,
    part: 1,
    title: 'Mental models of agents',
    subtitle: 'How agents actually work.',
    summary:
      'How agents actually work, at the level of precision a practitioner needs to direct them effectively.',
    body: [
      'The module describes how agents actually work, at the level of precision a practitioner needs to direct them effectively. Mental models make agent behaviour intelligible rather than mysterious, and failure modes predictable rather than surprising.',
      'The context window is the agent’s entire world for a session. Everything the agent knows exists within a finite token budget. There is no memory outside the window unless the engineer explicitly provides it. The agent has no awareness of what it does not know. Context engineering follows as a structural necessity.',
      'Tool use is the mechanism through which agents act on the world. The available tools (read file, write file, run shell command, search the web, call an API) define its action space entirely. The ADE determines this action space, and the human who configures it makes architectural decisions about what the agent can and cannot do.',
      'Planning is how agents decompose complex tasks into sequences of actions. Plans are only as good as the agent’s understanding of the task, which is only as good as the context assembled for them. Agents plan confidently regardless of whether the plan is correct.',
      'The failure-mode taxonomy is the most practically useful framework for diagnosing problems. Hallucination: generating plausible-sounding content that is factually wrong. Misalignment: solving the wrong problem because the intent was insufficiently specified. Ambiguity collapse: an underspecified instruction leads to confident output that picks one interpretation without acknowledging the others. Sycophancy: agreement with the human even when the human is wrong. Each failure mode has a different root cause and a different remedy.',
      'The jagged frontier closes the conceptual material. AI vastly outperforms humans on some tasks and fails surprisingly on others that seem easier. Practitioners must develop intuition for where the frontier runs in their specific domain.',
    ],
    outcome:
      'The student can use the practitioner mental model of agents (context window as the agent’s whole world, tools as action space, planning as next-step generation under context) to predict where a given prompt will succeed or fail, and can diagnose agent failures against the four-mode taxonomy (hallucination, misalignment, ambiguity collapse, sycophancy).',
  },
  {
    id: 4,
    part: 1,
    title: 'The anatomy of an agentic workflow',
    subtitle: 'From coding to engineering.',
    summary:
      'A workflow decomposed into its parts: intent, specification, context, plan, execution, verification, audit trail.',
    body: [
      'A workflow is decomposed into its parts: intent, specification, context, plan, execution, verification, audit trail. The parts run as the turns of a spiral, with later stages revising earlier ones as the project evolves. Each subsequent module is a detailed treatment of one stage, and Module 18 returns to the rhythm that connects them.',
      'The auditability principle is the discipline’s defining commitment: a workflow that cannot be inspected, replayed, or evaluated after the fact is craft rather than engineering. Engineering is accountable and reproducible. The audit trail is the frozen record linking intent to specification, to context, to agent trajectory, to output, and is what makes an agentic workflow engineering rather than sophisticated guesswork. In ASE this trail is produced automatically as a byproduct of the agent’s normal operation, which solves a problem classical software engineering struggled with for decades.',
    ],
    outcome:
      'The student can decompose any agentic workflow into its seven parts (intent, specification, context, plan, execution, verification, audit trail), explain the auditability principle and its operational consequences, and recognise an audit trail produced as a byproduct of agentic work.',
  },
  {
    id: 5,
    part: 1,
    title: 'The ADE typology',
    subtitle: 'Tooling and permissions.',
    summary:
      'How ADEs are built and what that means for the human’s responsibility: the six-pillar architecture and three categories.',
    body: [
      'The module covers how ADEs are built and what that means for the human’s responsibility. The six-pillar architecture provides a framework for reading any ADE as an instance of a category: the bare LLM, tool augmentation, knowledge and memory, learning from experience, multi-agent coordination, and computer use.',
      'The three ADE categories reflect different philosophies about transparency and control. Terminal and CLI-based agents expose the agent loop directly, give the developer maximum control over context and permissions, and compose naturally with other command-line tools. IDE-integrated agents embed AI in the environment the developer already uses, optimising for reduced friction at the cost of some visibility. Browser-based builders hide the architecture almost entirely, optimising for speed of creation. Each choice about transparency is also a choice about where the human’s responsibility is exercised.',
      'Permission design and sandboxing are engineering decisions. What tools an agent has access to determines its blast radius, the scope of damage if it acts incorrectly. Minimal footprint is the principle: an agent should have only the permissions required for the specific task, prefer reversible actions over irreversible ones, and err toward doing less when uncertain.',
    ],
    outcome:
      'The student can read any ADE as an instance of the six-pillar architecture, classify it into one of the three ADE categories (terminal/CLI, IDE-integrated, browser-based), evaluate a permission configuration in terms of blast radius, and apply the minimal-footprint principle to a concrete sandboxing decision.',
  },
  {
    id: 6,
    part: 2,
    title: 'Intent and the discipline of project conception',
    subtitle: 'Framing before the agent is invoked.',
    summary:
      'Most failed agentic work fails before any agent is invoked, because the problem was framed wrongly or not at all.',
    body: [
      'Most failed agentic work fails before any agent is invoked, because the problem was framed wrongly or not at all. The agent receives an underspecified instruction, makes confident assumptions about what was meant, and builds something coherent that misses what was actually wanted. Problem framing is the first and most consequential human contribution to any agentic workflow.',
      'Engineering and design literature positions problem framing as a respected discipline with its own rigour. Polya’s How to Solve It establishes the primacy of understanding the problem before attempting a solution. Donald Schön shows that expert practitioners reframe problems continuously as they engage with them. Frederick Brooks, in The Design of Design, supplies the empirical case: his own house-design log shows that requirements emerge from attempted solutions rather than from prior reflection. Solving the wrong solution is how the right problem is discovered.',
      'Above the surface question of “what features should we build” sits the deeper question of primary usefulness. What is this thing fundamentally for? Who needs it to exist? An agent can produce features without limit; only the human can answer whether the project should exist at all.',
      'Drawing on Brooks’s chapter on user models, “better wrong than vague” is a practical discipline. Every designer carries an implicit user model. Making the model explicit, even by guessing, allows it to be debated and corrected. The vague ASE practitioner ends up letting the model design for an imaginary user.',
      'Constraints are shaping material. Constraints shrink the search space and make design easier, not harder. Telling the agent what properties are needed produces a better result than telling it how to achieve them. Brooks’s four-way taxonomy of constraints (real, obsolete, misperceived, intentional) is the diagnostic to apply to any framing.',
      'The deliverables of good framing are first drafts in pencil rather than finished artefacts. A problem statement describes the situation rather than the solution. The stakeholder list names who needs the project to exist. The definition of done is specific enough to be testable. The out-of-scope list passes the test “why might a reasonable person have expected this to be in scope?” A practical procedure delegates the framing interview to the agent itself: the practitioner writes a short project sketch, then directs the agent to ask one focused question at a time across six clusters (purpose, user, success, boundaries, constraints, testability).',
    ],
    outcome:
      'The student can produce a framing document for an agentic project (problem statement, stakeholder list, testable definition of done, out-of-scope list with defensible boundaries), apply Brooks’s four-way taxonomy to a constraint set, and run a reverse-interview with the agent across the six question clusters (purpose, user, success, boundaries, constraints, testability).',
  },
  {
    id: 7,
    part: 2,
    title: 'Modern web application architecture',
    subtitle: 'Enough of each layer to direct an agent.',
    summary:
      'Frontend, backend, database, deployment, and the request cycle — a mental-model course rather than a programming course.',
    body: [
      'The module covers frontend, backend, database, deployment, and the request cycle. It teaches enough of each layer to let a student direct an agent intelligently. This is a mental-model course rather than a programming course. A developer who has no working picture of what a server does cannot give an agent a coherent instruction to build one. A developer with no model of how client-side and server-side rendering differ cannot evaluate what the agent has produced.',
      'The full stack is covered conceptually: what runs in the browser and why, what a backend API does and why the separation between frontend and backend exists, what a database provides and what the alternatives are, what deployment means and what the services that handle it actually do. The request cycle is traced in full, slowly enough that every step is named and understood: the user clicks a button, a request travels to a server, the server queries a database, and a response returns to the screen.',
    ],
    outcome:
      'The student can describe a modern web application architecture at the level needed to direct an agent intelligently, trace a request through the full cycle from button click to database query and response, and recognise when an agent’s proposed architecture is sound, broken, or merely fashionable.',
  },
  {
    id: 8,
    part: 2,
    title: 'Interface design and app documentation',
    subtitle: 'Legibility as a control mechanism.',
    summary:
      'The unifying concept is legibility — the property that makes a system readable and evaluable by someone who did not build it.',
    body: [
      'The unifying concept is legibility, the property of a system (an interface, a codebase, a document) that makes it readable, understandable, and evaluable by someone who did not build it. In agentic engineering legibility is a control mechanism. An illegible interface resists precise direction. An illegible codebase resists review. An illegible document resists audit.',
      'Interface design is a directing skill. When a developer instructs an agent to build a user interface, the quality of that instruction determines everything. A precise interface specification names the user flow, the information hierarchy, the interaction model, and the feedback design.',
      'Documentation is a produced artefact with a defined purpose and a defined audience. The structural distinction is between descriptive documentation, which describes what the code does and which agents produce competently, and explanatory documentation, which conveys why the code is structured the way it is. The explanatory category requires explicit human direction; the descriptive category does not.',
    ],
    outcome:
      'The student can specify a user interface at directing-quality precision (user flow, information hierarchy, interaction model, feedback design), distinguish descriptive from explanatory documentation, and recognise illegibility in an interface, codebase, or document as a control problem rather than an aesthetic one.',
  },
  {
    id: 9,
    part: 2,
    title: 'Cognified products and the architecture of intelligence',
    subtitle: 'Agent economics.',
    summary:
      'The distinction between using AI to build software and building software that contains AI — and the economics of inference.',
    body: [
      'The module covers the distinction between using AI to build software and building software that contains AI. Most of the course covers the first. This module covers the second: products where language-model intelligence is part of the user-facing value rather than only the development process.',
      'Architectural questions arise when intelligence is a product component: where does inference happen, what latency is acceptable, how is the model prompted and by what, what happens when the model is wrong and who handles it.',
      'Agent economics is treated with specific numbers because cost is a real architectural constraint. The module covers token pricing across providers, the impact of prompt caching, and the decision framework for frontier models versus smaller local models. The latency budget, defined as the response time acceptable for each kind of user interaction, determines the model choice more than capability does in most production systems.',
    ],
    outcome:
      'The student can distinguish using AI to build software from building software that contains AI, address the architectural questions cognification raises (inference location, latency budget, model choice, failure handling), and apply agent-economics reasoning (token pricing, prompt caching, frontier-versus-local trade-off) to a product design decision.',
  },
  {
    id: 10,
    part: 3,
    title: 'Specifications',
    subtitle: 'The deliverable of human work.',
    summary:
      'In agentic engineering, code is the agent’s output but the specification is the human’s.',
    body: [
      'In agentic engineering, code is the agent’s output but the specification is the human’s. A specification is a precise document that gives the agent enough information to make autonomous decisions correctly, so that the human does not need to intervene at every step. A feature list is something different.',
      'The formal benchmark behind a complete specification is the five-criteria definition of an algorithm Donald Knuth set out in The Art of Computer Programming: finiteness, definiteness, input, output, effectiveness. A natural-language briefing cannot reach the precision of a formal algorithm. The trade-off in agentic engineering is to give up some formal precision in exchange for the ability to describe higher-level intent. A briefing that ignores these properties is a wish, not a specification.',
      'A complete specification contains the goal and its business rationale, success criteria that are verifiable and not aspirational, architectural guidance that gives the agent strategic direction without dictating implementation steps, a validation approach that defines how correctness will be checked, and known pitfalls that an experienced developer would warn a colleague about.',
      'Categories of specification gap map to categories of agent failure. Missing success criteria produce agents that terminate when the code runs rather than when it works. Missing business rationale produces agents that solve the literal problem in ways that violate the intent. Missing architectural guidance produces agents that choose structurally correct but contextually wrong approaches. The reverse-interview methodology is the practical technique: prompting the agent to ask questions until it has enough information to write the specification itself.',
    ],
    outcome:
      'The student can write a complete specification containing goal and business rationale, verifiable success criteria, architectural guidance, validation approach, and known pitfalls; can diagnose categories of agent failure against categories of specification gap; and can run the reverse-interview methodology to extract specification material from underspecified intent.',
  },
  {
    id: 11,
    part: 3,
    title: 'Context engineering',
    subtitle: 'The agent’s briefing.',
    summary:
      'Deliberately curating what the agent encounters in its context window, rather than treating context as incidental.',
    body: [
      'Context is what the engineer deliberately puts in front of the agent, rather than whatever the agent happens to encounter. Context engineering is a discipline with its own principles, artefacts, and failure modes.',
      'Context as a budgeted resource: the token window is finite, attention quality degrades toward the end of large contexts, and kitchen-sink context (providing everything that might be relevant) demonstrably degrades performance. The engineering task is curation.',
      'Context as a designed artefact: the CLAUDE.md and AGENTS.md files are the primary mechanisms for persisting project-specific knowledge across sessions. Recent empirical research makes the design requirement concrete: human-written context files improve agent performance by approximately 4%, while LLM-generated context files decrease performance by 3% and increase token cost by over 20%.',
      'What goes into such a file falls into four kinds of content. Standards and processes: coding conventions, naming rules, build steps, the testing approach. Code quality expectations: stylistic guidance, the team’s stance on readability versus performance. Problem-solving heuristics: how the team prefers tasks to be approached. Collaboration protocols: how the agent should communicate, what to flag for human review, when to escalate.',
      'A related practice is a maintained lessons-learned file: a running record of corrections the human has made and rules the agent should internalise across tasks. This converts ephemeral course-corrections into durable project knowledge. Context as a maintained system: context files change as the project changes. Bad context is the dominant cause of bad agent output over time, and it accumulates silently.',
    ],
    outcome:
      'The student can design a project-specific CLAUDE.md or AGENTS.md file with appropriate content across the four kinds (standards and processes, code quality expectations, problem-solving heuristics, collaboration protocols), maintain a lessons-learned file across tasks, and recognise context degradation in its three forms (overflowed budget, ad-hoc artefact, neglected maintenance).',
  },
  {
    id: 12,
    part: 3,
    title: 'Safety, control, and recovery',
    subtitle: 'Working at speed without catastrophic loss.',
    summary:
      'Agents act on the world through tools, and tools have real consequences. Safety infrastructure is a prerequisite.',
    body: [
      'Agents act on the world through tools, and tools have real consequences. A file written cannot be unwritten without a record of what it replaced. A shell command executed leaves state. Safety infrastructure is a prerequisite for working at speed without catastrophic loss.',
      'Git and version control remain the primary safety layer in agentic engineering, despite the checkpoint systems built into modern ADEs. Across sessions and in collaborative environments, Git is the only audit trail that persists, the only history that is human-readable and independently verifiable.',
      'The Git practices that matter in an agentic workflow are specific. Committing before invoking an agent on a non-trivial task creates a clean restore point. Atomic commits whose messages explain why rather than only what make the agent’s trajectory readable after the fact. Branch discipline gives the human a safe space to evaluate agent output.',
      'Trajectory management is the judgment skill that determines whether a session ends with a usable result or a compounding mess. Signals indicate a trajectory is drifting; interventions correspond to each signal.',
    ],
    outcome:
      'The student can apply Git practices appropriate to agentic work (pre-invocation commits, atomic commits with rationale, branch discipline for safe agent output evaluation), configure permission boundaries that scope blast radius, and execute trajectory-management interventions in response to the standard drift signals during a session.',
  },
  {
    id: 13,
    part: 3,
    title: 'Verification before trust',
    subtitle: 'Every agent output is a hypothesis until checked.',
    summary:
      'Verification is the structural commitment that makes agentic engineering trustworthy rather than merely fast.',
    body: [
      'Every agent output is a hypothesis until checked. Verification is the structural commitment that makes agentic engineering trustworthy rather than merely fast.',
      'Verification is a category rather than a single technique. It includes tests, type checks, linters, manual review, and acceptance gates, each catching different failure modes. The principle behind all of them is the same: no agent output enters the project without passing through a defined gate.',
      'Three failure modes make verification harder than it sounds. Agents write tests that confirm their own implementation rather than probing the specification’s intent. Verification theatre installs gates that exist but catch nothing. Gate bypass happens under deadline pressure. The MRP (Merge-Readiness Pack) is a structured verification framework, developed fully in Module 16.',
    ],
    outcome:
      'The student can design verification gates appropriate to the failure modes a project actually faces, recognise verification theatre when they see it, resist gate bypass under deadline pressure, and produce evidence sufficient for the MRP standard.',
  },
  {
    id: 14,
    part: 3,
    title: 'Multi-agent decomposition and orchestration',
    subtitle: 'Implicit versus explicit orchestration.',
    summary:
      'Every modern ADE already runs multi-agent orchestration internally; the distinction that matters is implicit versus explicit.',
    body: [
      'Every modern ADE already runs multi-agent orchestration internally. When a developer uses Claude Code, Cursor, or any comparable tool on a non-trivial task, the tool is already spawning subagents, making parallel tool calls, and running evaluator loops. The distinction that matters for practitioners is between implicit orchestration, where the tool manages decomposition internally, and explicit orchestration, where the developer designs the decomposition because the tool’s internal handling is not sufficient.',
      'Decomposition is the engineering activity that determines whether explicit orchestration succeeds. The module teaches how to break a task into sub-tasks with clear boundaries, how to identify what can run in parallel versus what must run in sequence, and how to isolate context so that each agent works in a clean scope.',
      'The five workflow patterns provide the vocabulary for explicit orchestration design: prompt chaining, routing, parallelization, orchestrator-workers, and evaluator-optimizer. N-version programming is a counterintuitive application of the parallelization pattern. The cost constraint frames every decision: multi-agent workflows use approximately 15 times more tokens than standard interactions.',
    ],
    outcome:
      'The student can distinguish implicit from explicit orchestration, decide when the cost of explicit orchestration is justified (given the 15x token premium), break a task into sub-tasks with clean boundaries and isolated context, and apply each of the five workflow patterns (prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer) to a concrete decomposition.',
  },
  {
    id: 15,
    part: 3,
    title: 'Designing multi-agent workflows',
    subtitle: 'Coordination as a design discipline.',
    summary:
      'From the patterns of Module 14 to their application as a design discipline.',
    body: [
      'Module 15 moves from the patterns of Module 14 to their application as a design discipline. A coordination design specifies which patterns apply to a given task, which roles the agents play, what the boundaries between them are, and what the cost-benefit justification is.',
      'The practical principles that determine whether explicit orchestration works are covered in depth. The orchestrator must be taught to delegate. Effort must scale to complexity. Tool design is a first-order concern, not a polish step.',
      'The key design patterns from the empirical literature are Role-Based Cooperation, Self-Reflection, Cross-Reflection, and Agent Evaluator.',
    ],
    outcome:
      'The student can produce a coordination design for a multi-agent workflow that specifies patterns, roles, boundaries, and cost-benefit justification, can teach an orchestrator to delegate effectively, can scale effort to complexity, and can design tools for the agents to use.',
  },
  {
    id: 16,
    part: 3,
    title: 'Review and quality',
    subtitle: 'Legacy onboarding.',
    summary:
      'Code review is the skill of reading and evaluating code one did not write — and in agentic engineering, all significant code is foreign code.',
    body: [
      'Code review is the skill of reading and evaluating code one did not write. In agentic engineering, all significant code is code one did not write. Agent-generated output is foreign code. An inherited legacy codebase is foreign code. The cognitive task is the same in both cases.',
      'The empirical case for taking review seriously is concrete. Under rigorous audit, GPT-4’s apparent solve rate on real bugs collapsed from 12.47% to 3.97%. Nearly 30% of seemingly correct agent patches introduced behavioural regressions or were wrong on careful re-examination.',
      'The MRP (Merge-Readiness Pack) is the structured verification standard. It consists of five criteria with explicit evidence requirements: functional completeness, sound verification, SE hygiene, rationale and communication, and full auditability. A pull request that satisfies all five criteria is merge-ready.',
      'A linked concern emerges over time. Agent-generated code that passes review at the moment it is written may still accumulate as a maintenance burden: style drift, redundant abstractions, design intent that is no longer traceable. The same review discipline that catches the immediate regression is the only mechanism that prevents this slow accumulation. The dependency-graph methodology addresses the legacy migration case; tests must be rewritten from logical intent rather than translated literally from the source.',
    ],
    outcome:
      'The student can review foreign code (agent-generated or legacy-inherited) against the MRP’s five criteria, distinguish surface correctness from rigorous-audit correctness, apply the dependency-graph methodology to a legacy migration, and rewrite tests from logical intent rather than literal translation.',
  },
  {
    id: 17,
    part: 3,
    title: 'Security, risk, and governance in agentic systems',
    subtitle: 'Architectural problems, not features.',
    summary:
      'Security and governance in agentic systems are architectural problems. They cannot be added as features after the fact.',
    body: [
      'Security and governance in agentic systems are architectural problems. They cannot be added as features after the fact. The risks are specific to systems where agents have tools, permissions, and real-world reach. Governance organises how those risks are addressed at the level of an organisation rather than an individual session.',
      'Prompt injection is the foundational security risk: malicious content in the agent’s environment embeds instructions that the agent treats as commands rather than data. The agent has no mechanism for distinguishing instruction from content. Both are text in the context window.',
      'Blast radius is the organising concept for permission design. An agent with broad permissions can cause damage at the scale of those permissions if compromised. The engineering response is minimal footprint. Malicious tool servers and supply-chain attacks on the agent’s tool dependencies are the infrastructure-level equivalent of prompt injection. The OWASP Top 10 for Agentic Applications is the practical reference.',
      'Governance complements security as the organisation-level concern. Where security asks what an attacker could do, governance asks what the organisation has sanctioned: who is allowed to authorise which agent actions; what policies the agent must follow before acting; what records of agent activity must persist and for how long; what human review is required before specific classes of work are accepted. AgentOps names this work as a discipline rather than a side concern. Governance is the structural continuation of the audit-trail commitment introduced in Module 4.',
    ],
    outcome:
      'The student can identify prompt-injection vectors in an agentic system, design permission boundaries that contain blast radius, evaluate an agent’s tool-server dependencies for malicious servers and supply-chain risk, apply the OWASP Top 10 for Agentic Applications as a practical reference, and distinguish security questions (what could happen) from governance questions (what is sanctioned, recorded, and reportable).',
  },
  {
    id: 18,
    part: 3,
    title: 'Living projects',
    subtitle: 'The spiral after the first build.',
    summary:
      'Modules 11–17 teach the techniques in isolation; Module 18 teaches the rhythm that puts them together.',
    body: [
      'Modules 11 through 17 teach the techniques of agentic software engineering in isolation: context engineering, safety, verification, multi-agent orchestration, review, security. Module 18 teaches the rhythm that puts them together.',
      'The philosophical foundation is borrowed from Brooks. The rationalism-versus-empiricism axis returns in full. Empiricism holds that humans are fallible and iteration is structurally necessary. ASE pushes the position further still, because the agent itself behaves empirically and must be tested rather than reasoned about. The Lufthansa Flight 2904 case carries the empirical weight. The code followed the spec exactly. The spec was a correct description of normal landing and a wrong description of reality. People died. No proof, no spec, no formal method can validate the original objectives against reality. Only contact with reality can.',
      'A related tension is the one Donald Knuth named in The Art of Computer Programming. The apparent dichotomy is between programming as creative art and programming as mathematical science. Knuth refused to choose. The curriculum’s structure-versus-flow tension is the same tension in a new vocabulary: structure is what makes flow sustainable as engineering, and flow is what keeps structure from becoming bureaucracy.',
      'The co-evolution model follows. Problem space and solution space evolve together rather than in sequence, with each step of the spiral revealing something about what was actually wanted. The spiral shape comes from Boehm, with Brooks’s added contracting points as the practical refinement. Inside each turn, the work runs fast and loose. Between turns, intent is pinned down at named moments.',
      'The mechanics of one turn are the practical core: intent revision (Modules 6 and 10), context update (Module 11), safety positioning (Module 12), the build itself, verification (Module 13), and review (Module 16). Two judgment skills complete the module. The commit point is the decision at the end of each turn about what to lock. Drift detection is the skill of recognising when the spiral is failing.',
    ],
    outcome:
      'The student can articulate the rationalism-empiricism axis and ASE’s empiricist position, recognise the co-evolution of intent and build in their own project, execute the mechanics of one turn of the spiral (intent revision, context update, safety positioning, build, verification, review), make commit-point decisions, and detect drift as it develops.',
  },
  {
    id: 19,
    part: 4,
    title: 'Work in the age of AI',
    subtitle: 'How the developer role is restructuring.',
    summary:
      'How the developer role is restructuring, with attention specifically to practitioners of agentic engineering.',
    body: [
      'The module analyses how the developer role is restructuring, with attention specifically to practitioners of agentic engineering. “Developer” no longer means what it meant five years ago. The broader social context is acknowledged honestly: public hostility to AI is real, tech layoffs are happening at unprecedented rates with AI increasingly cited as the cause, and yet no systematic increase in unemployment has been detected for the most AI-exposed occupations after three years of post-ChatGPT adoption, while AI-pilled companies are growing at historically unprecedented rates. The contradiction is the starting point.',
      'The conceptual key that resolves the contradiction is that AI affects tasks rather than jobs. A job is a collection of many tasks; AI absorbs some, but the job itself usually survives. Computer Programmers, the most exposed occupation, show 75 per cent task coverage, but employment levels remain stable. The one detectable early signal is concentrated on young workers, where hiring into exposed jobs has slowed about 14 per cent. The on-ramps are narrowing before the floor falls.',
      'The human sandwich pattern captures the structure of the surviving work. Even within the most heavily automated agentic workflows, humans frame the work at the start and judge the work at the end; the agent does the typing in between. Anthropic’s data confirms the pattern: 79 per cent of Claude Code interactions are classified as automation, but 36 per cent of those involve feedback loops where the human remains continuously in the loop.',
      'Shipper’s broader thesis closes the analytical section. Automation creates more expert work, because cheap competence creates demand for the differentiation that only experts can supply. The market is bifurcating along this line. The module then turns practical: how to read the market, which employer adoption signals indicate genuine ASE practice versus performative mention, how to evaluate a role for whether it will develop or erode the compounding skills, and how to talk about ASE experience in a CV and interview without sounding vague.',
    ],
    outcome:
      'The student can articulate the AI-affects-tasks-not-jobs thesis with empirical support, identify the human-sandwich pattern in real workflows, read employer signals that distinguish genuine ASE practice from performative mention, and evaluate a role for whether it will develop or erode the compounding skills.',
  },
  {
    id: 20,
    part: 4,
    title: 'Entrepreneurship in the age of AI coding',
    subtitle: 'Two mechanisms that compound each other.',
    summary:
      'How startup economics have changed through cost compression and cognification.',
    body: [
      'The module gives a rigorous analysis of how startup economics have changed through two distinct mechanisms that compound each other. The first: agentic coding compresses development cost and timeline, making projects economically viable that were not before. The second: cognification opens new product surfaces in domains where software was previously too expensive or too slow to be the solution, such as legal platforms automating document review, fintech systems reasoning over transactions, and operations teams building internal tools.',
      'Case studies are examined analytically rather than anecdotally. For each case the specific mechanism of value creation, the organisational condition that made it possible, and the risk that was managed or ignored are identified. The cases include TELUS reducing 500,000 hours of work through AI-augmented workflows, Zapier achieving 89% AI adoption across the organisation, and a lawyer with no coding background building a Claude-powered legal review workflow that reduced turnaround from days to hours.',
      'The new bottlenecks are as important as the compressed constraints. Development cost and timeline are no longer the primary obstacles for a founder with agentic tools. Distribution, customer understanding, judgment about what to build, and the ability to iterate quickly on product decisions are.',
    ],
    outcome:
      'The student can analyse a startup case study for value-creation mechanism, organisational enabling condition, and managed-or-ignored risk; can apply the two-mechanism frame (cost compression and cognification) to a new opportunity; and can name the new bottlenecks that replace development cost and timeline as primary obstacles.',
  },
  {
    id: 21,
    part: 'closing',
    title: 'Reading the trajectory',
    subtitle: 'ASE in a moving field.',
    summary:
      'How a practitioner keeps their own mental model of the discipline fresh as the underlying technology shifts.',
    body: [
      'The closing module addresses how a practitioner keeps their own mental model of the discipline fresh as the underlying technology shifts. Predictions about what LLMs and ASE will look like in the future age badly, so the module avoids them. The meta-skill of staying current is the most important skill the course teaches.',
      'The module has three parts. The first is an explicit inventory of which principles taught in this course are likely durable and which are tied to current capabilities. The durable list includes co-evolution, intent discipline, verification before trust, human accountability, the audit trail, and framing as the first design decision. The contingent list includes specific ADE features, cost structures, today’s failure-mode taxonomy, current context window sizes, and current orchestration patterns.',
      'The historical record offers concrete evidence that the durable-versus-contingent distinction is real. Donald Knuth began The Art of Computer Programming in 1962 and is still publishing volumes today. Across that span every specific programming tool, language, and machine that existed at the start has been replaced, and yet the algorithmic principles in Volume 1 remain canonical reading. The principles outlasted the scaffolding by more than sixty years.',
      'The second part is a method for updating: what signals matter when reading a model release, how to evaluate a new ADE using the typology from Module 5, what to monitor in the ecosystem, and what practitioner habits keep a person current without drowning in noise. The third part is the trajectory question, handled with discipline. If agents become reliably more autonomous in narrow domains, what does that do to verification? If costs collapse, what does that do to orchestration? If context windows become effectively unlimited, which discipline currently taught becomes unnecessary, and which becomes more important?',
    ],
    outcome:
      'The student can inventory the curriculum’s claims as durable principles or contingent capabilities, apply a method for updating their mental model in response to model releases and ADE evolution, and engage the trajectory question with discipline rather than prediction.',
  },
]

export const courseOutcomes = [
  { id: 'LO1', text: 'Articulate Agentic Software Engineering as the discipline of structured, auditable human-agent workflows, and explain how the discipline differs from tool skill, casual prompting, and general LLM use.' },
  { id: 'LO2', text: 'Apply the conceptual frame the discipline rests on: the human-agent division of labour, the auditability principle, the seven-part anatomy of an agentic workflow, the co-evolution of intent and build, and the evolutionary spiral.' },
  { id: 'LO3', text: 'Frame an agentic project by producing the framing artefacts (problem statement, stakeholder list, testable definition of done, out-of-scope list) and by conducting a reverse-interview with the agent to surface missing information.' },
  { id: 'LO4', text: 'Write a complete specification that approximates Knuth’s five criteria (finiteness, definiteness, input, output, effectiveness) and that gives the agent enough information to make autonomous decisions correctly.' },
  { id: 'LO5', text: 'Engineer the context an agent receives by designing and maintaining context files (CLAUDE.md, AGENTS.md), curating context as a budgeted resource, and converting course-corrections into durable project knowledge.' },
  { id: 'LO6', text: 'Apply safety infrastructure to agentic work, including Git practices, sandboxing, and trajectory management, and recover from agent error without catastrophic loss.' },
  { id: 'LO7', text: 'Design and operate verification gates appropriate to the project, detect verification theatre, and evaluate agent output against the MRP standard.' },
  { id: 'LO8', text: 'Decompose tasks for multi-agent workflows using the five workflow patterns, justify the cost of explicit orchestration relative to implicit, and design coordination between agents that work in clean scopes.' },
  { id: 'LO9', text: 'Identify security and governance risks specific to agentic systems (prompt injection, blast radius, supply-chain attacks on tool servers), and apply the engineering and organisational responses to them.' },
  { id: 'LO10', text: 'Operate a project through multiple turns of the evolutionary spiral, make commit-point decisions, and recognise drift as it develops.' },
  { id: 'LO11', text: 'Read the labour market and the entrepreneurial environment with reference to AI’s effect on tasks rather than jobs, and position themselves in the bifurcation between expert-frame work and pure-implementation work.' },
  { id: 'LO12', text: 'Maintain their own mental model of the discipline as the underlying technology shifts, distinguishing durable principles from contingent capabilities.' },
]

export const assessment = {
  intro:
    'In an agentic course the artefact a student delivers is co-produced with an agent, so the grading scheme grades the discipline rather than the lines of code.',
  philosophy: [
    'The course grades what the student contributes that the agent cannot: framing, specification, context engineering, verification design, code review against the MRP standard, multi-agent coordination, security and governance analysis, and the practitioner’s reading of the field.',
    'First, the audit trail is gradable. The student’s chat transcript, commit history, context files, lessons-learned notes, and verification records are submitted alongside the final artefact. Without these, the artefact is opaque and cannot be evaluated.',
    'Second, the spiral is gradable, and not only its endpoint. The mid-project commit-point decisions, the recovery from drift, and the revisions to the specification that the build forced are the points where the student’s judgment shows.',
    'Third, verification is gradable as a deliverable, and not only as a state to be reached. A student who produced thorough verification gates that caught real failure modes scores higher than a student whose work happens to be correct but whose gates would have caught nothing.',
  ],
  groups: [
    {
      title: 'Continuous coursework',
      weight: '50%',
      note: 'Collected as four portfolios, each submitted at the end of its module cluster.',
      items: [
        { name: 'Framing and specification portfolio', weight: '15%', maps: 'Modules 6 & 10 → LO3, LO4', desc: 'The framing document for the student’s individual project together with a complete specification that approximates Knuth’s five criteria.' },
        { name: 'Context engineering and safety portfolio', weight: '10%', maps: 'Modules 11 & 12 → LO5, LO6', desc: 'The project’s CLAUDE.md, the lessons-learned file maintained across at least three sessions, a Git practice log, and a brief retrospective on one trajectory-management intervention.' },
        { name: 'Verification and review portfolio', weight: '15%', maps: 'Modules 13 & 16 → LO7', desc: 'A verification gate design, evidence that the gates caught at least one real failure mode, and an MRP-compliant code review of agent-generated or legacy code.' },
        { name: 'Multi-agent workflow design', weight: '10%', maps: 'Modules 14 & 15 → LO8', desc: 'A short design document that decomposes a given task into a multi-agent workflow, justifies the cost of explicit orchestration, names the patterns applied, and reflects on what failed.' },
      ],
    },
    {
      title: 'The project',
      weight: '40%',
      note: 'Runs through the semester. The student builds a small software product across at least three full turns of the evolutionary spiral, with audit trail.',
      items: [
        { name: 'Audit trail of the project’s turns', weight: '15%', maps: 'Modules 4, 10 & 18 → LO2, LO6, LO10', desc: 'Graded for legibility, completeness, and the visibility of judgment: original intent, what changed between turns and why, the commit-point decision at each turn, and where drift threatened.' },
        { name: 'MRP-compliant pull request', weight: '10%', maps: 'Modules 13 & 16 → LO7', desc: 'The merge-ready deliverable for the final turn. Must satisfy all five MRP criteria with evidence.' },
        { name: 'Security and governance memo', weight: '5%', maps: 'Module 17 → LO9', desc: 'Prompt-injection surface, permission boundaries, OWASP-relevant risks, and the governance questions a deploying organisation would have to answer.' },
        { name: 'Reflective analysis', weight: '10%', maps: 'Modules 6 & 18 → LO10', desc: 'What the student learned by executing the project, focused on what changed in the specification because of the build — demonstrating they noticed the co-evolution rather than treating it as scope creep.' },
      ],
    },
    {
      title: 'The closing artefact',
      weight: '10%',
      note: 'The one-page document Module 21 asks for.',
      items: [
        { name: 'Closing artefact', weight: '10%', maps: 'Module 21 → LO12', desc: 'What the student expects to revise in this course within eighteen months and how they will know to revise it.' },
      ],
    },
  ],
  rubric: [
    { name: 'Process traceability', desc: 'Whether an assessor can reconstruct what the student did and why. Audit trails that are absent, opaque, or evidently retrofitted score zero, regardless of the quality of the final artefact.' },
    { name: 'Specification quality', desc: 'Whether the student’s framing and specifications hold under interrogation. A specification that addresses the five-criteria approximation, names its known pitfalls, and includes the rationale behind its constraints scores higher than one that lists features.' },
    { name: 'Verification credibility', desc: 'Whether the student’s verification work would catch the failure modes the project actually faces. Gates that are present but catch nothing (verification theatre) are explicitly penalised.' },
    { name: 'MRP-readiness', desc: 'For the final deliverable, whether all five MRP criteria are satisfied with evidence. An artefact that satisfies four out of five is not merge-ready and is treated as such in grading.' },
  ],
  integrity: [
    'The integrity standard for an ASE course is different from the standard for a programming course. Agent use is expected. What the student must do is declare it.',
    'Every submitted artefact carries a brief delegation note: which parts the student wrote themselves, which parts the agent produced under direction, and what the audit trail records. The audit trail itself is the primary check.',
    'The integrity violations the course recognises are three: hidden delegation, modification of the audit trail to conceal what was delegated, and submission of artefacts that cannot be reconstructed from the audit trail. Using an agent to produce the artefact is, by itself, none of these.',
  ],
}

export const tooling = [
  {
    title: 'The choice of ADE',
    body: [
      'The Agentic Development Environment is where the discipline becomes operational. Every other technique in the curriculum is implemented through the configuration of an ADE. The choice of which ADE to use, and how to configure it, is the first engineering decision in any agentic project.',
      'The choice is made against the requirements of the work, not against the marketing of the products. Four questions structure it. What permissions does the agent need? What level of transparency does the work require? What other tools must compose with the agent? What cost and latency envelope can the work absorb?',
    ],
  },
  {
    title: 'The six-pillar architecture',
    body: [
      'Any ADE can be read as a particular combination of six concerns. The bare LLM is the foundation: the model determines a ceiling that no amount of tooling can lift. Tool augmentation is what the agent can do beyond producing text. Knowledge and memory is what persists across sessions. Learning from experience is the mechanism by which the agent improves over time within a project. Multi-agent coordination is the architecture for tasks that require more than one agent. Computer use is the capacity for the agent to operate the desktop or browser as a user would.',
      'A practitioner reading a new ADE answers six questions: what is the model, what tools are available, what persists across sessions, how does the system learn, how do agents coordinate, and can the agent operate the screen.',
    ],
  },
  {
    title: 'The three ADE categories',
    body: [
      'Terminal and CLI-based agents expose the agent loop directly. The developer sees the model’s reasoning, the tool calls, the file diffs, and the verification gates as they happen. Transparency is the design value, and the cost is a higher learning curve. Examples: Claude Code, Codex CLI.',
      'IDE-integrated agents embed the model in the development environment the developer already uses. The friction of context-switching collapses. The trade-off is reduced visibility into what the agent is doing under the hood. Examples: Cursor, GitHub Copilot Workspace.',
      'Browser-based builders hide the architecture almost entirely. The developer states what they want and the platform produces a running application, often without exposing the code. Speed of creation is the design value. Examples: Lovable, v0. The choice is rarely between products; it is between categories.',
    ],
  },
  {
    title: 'Permission design and sandboxing',
    body: [
      'Permission design determines how much damage an agent can cause if it acts incorrectly. The decision is made before the agent is invoked, not afterwards. Minimal footprint: an agent should have only the permissions required for the specific task at hand, no more. Reversibility: prefer tools that produce reversible actions over irreversible ones.',
      'Sandboxing is the infrastructure layer that enforces the permission design. The practitioner’s responsibility is to understand the sandbox they are using, to verify that its boundaries match the project’s blast-radius requirements, and to escalate sandboxing controls when the work demands them.',
    ],
  },
  {
    title: 'Context infrastructure',
    body: [
      'CLAUDE.md and AGENTS.md are the primary mechanisms for persisting project-specific knowledge across sessions. They live in the project directory, are versioned with the code, and are read by the agent at the start of every session. A maintained lessons-learned file complements the context file. Context is also a budgeted resource: the token window is finite and the engineering task is curation.',
      'Recent empirical research makes the design requirement concrete. Human-written context files improve agent performance by approximately 4%. LLM-generated context files decrease performance by 3% and increase token cost by over 20%. The maintenance of context files is a first-order engineering activity, not a delegation candidate.',
    ],
  },
  {
    title: 'Agent economics',
    body: [
      'Inference is a metered, billable operation. Token pricing varies across providers and models; frontier models are typically priced an order of magnitude higher than smaller models in the same family. Prompt caching reduces the cost of repeated context, with discounts of 80% or more typical at the time of writing.',
      'The decision between frontier and smaller models is shaped by the task. A multi-agent workflow may use frontier models for high-stakes reasoning such as orchestration and evaluation, and smaller models for high-volume execution. The latency budget is a separate consideration: the response time acceptable for a user interaction determines the model choice more than capability does in most production systems.',
    ],
  },
]

export const glossary = {
  central: [
    { term: 'Agentic software engineering (ASE)', def: 'The discipline of structured, auditable human-agent workflows for building software. The human frames, specifies, and judges; agents execute. The discipline has its own principles, artefacts, failure modes, and ethics, and carries from one product to the next.' },
    { term: 'Agentic development environment (ADE)', def: 'The operational centre of ASE practice. An ADE determines what tools an agent has, what permissions it operates under, what context it can access, and what transparency the human receives in return.' },
    { term: 'ASE versus casual prompting', def: 'The foundational distinction that motivates the curriculum. A casual prompter gives an agent an instruction and hopes. An agentic software engineer equips the agent with the right problem, specification, context, tools, permissions and limits, and verifies the output against a defined standard before accepting it.' },
    { term: 'Evolutionary spiral', def: 'The synthesis at the heart of the curriculum: a rhythm in which intent and build co-evolve through a sequence of turns, each fast and loose inside but pinned down at named commit points between turns.' },
    { term: 'Co-evolution of intent and build', def: 'The claim that the problem space and the solution space evolve together rather than in sequence. Each step of the build teaches the framer something about what they actually wanted, so intent must be allowed to move.' },
    { term: 'Commit point', def: 'The decision, at the end of a turn of the spiral, about what to lock: what goes back into the specification, what remains open, what is named done.' },
    { term: 'Drift detection', def: 'The judgment skill of recognising when a spiral is failing: going in circles, expanding scope, losing intent, accumulating mess. Paired with commit point.' },
    { term: 'Trajectory management', def: 'The skill of recognising signals during a single agent session that the work is drifting from the task, and applying the corresponding intervention. Operates within one agent invocation; drift detection operates across turns.' },
    { term: 'Auditability principle', def: 'The discipline’s defining commitment: a workflow that cannot be inspected, replayed, or evaluated after the fact is craft, not engineering. Engineering is accountable and reproducible.' },
    { term: 'Audit trail', def: 'The frozen record linking intent to specification, to context, to plan, to execution, to verification. Sufficient that someone other than the original engineer can reconstruct what was decided, why, and what happened.' },
    { term: 'Verification before trust', def: 'The principle that every agent output is a hypothesis until checked. No agent output enters the project without passing through a defined verification gate.' },
    { term: 'Verification theatre', def: 'Verification gates that exist but catch nothing. A named failure mode students learn to recognise in their own and others’ workflows.' },
    { term: 'Legibility', def: 'The property of a system, interface, codebase or document that makes it readable, understandable, and evaluable by someone who did not build it. A control mechanism in agentic engineering.' },
    { term: 'Minimal footprint', def: 'The principle that an agent should have only the permissions required for the task at hand, no more. The engineering response to blast radius.' },
    { term: 'Blast radius', def: 'The scope of damage if an agent with given permissions acts incorrectly. The organising concept for permission design.' },
    { term: 'Context engineering', def: 'The discipline of deliberately curating what the agent encounters in its context window. A first-order engineering activity with its own principles, artefacts (CLAUDE.md, AGENTS.md, lessons-learned files), and failure modes.' },
    { term: 'Cognified products', def: 'Software products in which language-model intelligence is part of the user-facing value, distinct from products built using AI as a development aid.' },
    { term: 'Agent economics', def: 'The cost, latency, and architectural constraints that follow from inference being a metered, billable operation. Model choice, caching strategy, and latency budget shape what the product can promise.' },
  ],
  adopted: [
    { term: 'Spiral model', def: 'The iterative software process proposed by Boehm (1988), in which risk-driven turns replace the linear waterfall.' },
    { term: 'Co-evolution (original sense)', def: 'From design research: Maher and colleagues (1996) and Cross and Dorst (1999) describe the problem space and the solution space evolving together in creative design.' },
    { term: 'Rationalism versus empiricism axis', def: 'Brooks (2010, Chapter 8): the opposition between believing that careful thought yields a flawless design before any code is written, and believing that humans are fallible and design must proceed by build-evaluate-revise cycles.' },
    { term: 'Better wrong than vague', def: 'Brooks (2010): the practical discipline of making implicit user models explicit, even by guessing, so they can be debated and corrected.' },
    { term: 'Five-criteria specification', def: 'Knuth (1968): an algorithm is defined by finiteness, definiteness, input, output, and effectiveness. The formal benchmark a natural-language specification approximates.' },
    { term: 'Jagged frontier', def: 'The pattern in which AI capability is non-uniform across tasks, vastly outperforming humans on some and failing on others that seem easier. Term in common use following Ethan Mollick.' },
    { term: 'Human sandwich', def: 'The pattern in which humans frame the work at the start, judge it at the end, and the agent does the typing in between. From Klaassen (2026) at Every.' },
    { term: 'Tacit knowing', def: 'Polanyi (1958, 1966): a practitioner knows more than they can tell. The parts of expertise that resist articulation are precisely the parts that resist replacement.' },
    { term: 'Merge-Readiness Pack (MRP)', def: 'Hassan et al. (2025): a structured verification standard with five criteria — functional completeness, sound verification, SE hygiene, rationale and communication, and full auditability.' },
    { term: 'SASE, and the ACE/AEE workbench split', def: 'Hassan et al. (2025): a research vision for agentic software engineering and the architectural distinction between agent-controlled execution environments and human-controlled review environments.' },
    { term: 'Prompt injection', def: 'Malicious content in the agent’s environment embeds instructions that the agent treats as commands rather than as data. The agent has no built-in mechanism for distinguishing instruction from content.' },
    { term: 'Five workflow patterns', def: 'Prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer. Vocabulary established in Anthropic’s engineering writing on agent workflows.' },
    { term: 'N-version programming', def: 'A reliability technique in which the same task is solved by multiple independent implementations whose outputs are compared. Applied here as a counterintuitive use of the parallelization pattern.' },
    { term: 'Six-pillar ADE architecture', def: 'A composite framework for reading any ADE as an instance of six concerns: the bare LLM, tool augmentation, knowledge and memory, learning from experience, multi-agent coordination, and computer use.' },
    { term: 'Autonomy level framework', def: 'A typology of agent autonomy spanning manual coding, task-agentic assistance, goal-agentic assistance, specialized domain autonomy, and general domain autonomy.' },
    { term: 'AgentOps', def: 'The operational practices of running fleets of agents in production: deployment, monitoring, version control of agent definitions, incident response, and the management of permission and policy at the organisational level.' },
  ],
}

export const references = [
  {
    group: 'Foundational works in design, problem-solving, and software engineering',
    items: [
      'Brooks, Frederick P. Jr. (2010). The Design of Design: Essays from a Computer Scientist. Addison-Wesley.',
      'Brooks, Frederick P. Jr. (1975; anniversary edition 1995). The Mythical Man-Month: Essays on Software Engineering. Addison-Wesley.',
      'Polya, George (1945). How to Solve It: A New Aspect of Mathematical Method. Princeton University Press.',
      'Knuth, Donald E. (1968; third edition 1997). The Art of Computer Programming, Volume 1: Fundamental Algorithms. Addison-Wesley.',
      'Schön, Donald A. (1983). The Reflective Practitioner: How Professionals Think in Action. Basic Books.',
      'Simon, Herbert A. (1969; third edition 1996). The Sciences of the Artificial. MIT Press.',
      'Alexander, Christopher (1964). Notes on the Synthesis of Form. Harvard University Press.',
    ],
  },
  {
    group: 'Software process models',
    items: [
      'Royce, Winston W. (1970). “Managing the development of large software systems.” Proceedings of IEEE WESCON, 26.',
      'Boehm, Barry W. (1988). “A spiral model of software development and enhancement.” IEEE Computer, 21(5), 61–72.',
      'Maher, Mary Lou; Poon, Jurgen; Boulanger, Sylvie (1996). “Formalising design exploration as co-evolution.” In Advances in Formal Design Methods for CAD. Springer.',
      'Cross, Nigel; Dorst, Kees (1999). “Co-evolution of problem and solution spaces in creative design.” In Computational Models of Creative Design IV, University of Sydney.',
      'Raymond, Eric S. (2001). The Cathedral and the Bazaar. O’Reilly Media.',
      'Mills, Harlan D. (1987). “Cleanroom software engineering.” IEEE Software, 4(5), 19–25.',
      'Parnas, David L. (1979). “Designing software for ease of extension and contraction.” IEEE Transactions on Software Engineering, SE-5(2), 128–138.',
    ],
  },
  {
    group: 'Academic research on agentic software engineering',
    items: [
      'Hassan, Ahmed E.; Li, Hao; Lin, Dayi; Adams, Bram; Chen, Tse-Hsun; Kashiwa, Yutaro; Qiu, Dong (2025). “Agentic Software Engineering: Foundational Pillars and a Research Roadmap.” arXiv:2509.06216.',
      'Meske, Christian; Hermanns, Tobias; von der Weiden, Esther; Loser, Kai-Uwe; Berger, Thorsten (2025). “Vibe Coding as a Reconfiguration of Intent Mediation in Software Development.” IEEE Access, 13, 213242–213259.',
      'Taibi, Davide; Muccini, Henry; Vaidhyanathan, Karthik; Kalinowski, Marcos; et al. (2026). “A Research Agenda on Agents and Software Engineering: Outcomes from the Rio A2SE Seminar.” arXiv:2605.11720.',
      'Dong, Tao; Shi, Sherry; Sampath, Harini; Macvean, Andrew (2026). “From Correctness to Collaboration: A Human-Centered Taxonomy of AI Agent Behavior in Software Engineering.” CHI EA ’26.',
      'Otoum, Nesreen; Elkhalili, Nuha (2026). “Methods and Techniques of Agentic Software Engineering: A Systematic Literature Review.” IEEE Access, 14.',
    ],
  },
  {
    group: 'Empirical research on AI in software work',
    items: [
      'Eloundou, Tyna; Manning, Sam; Mishkin, Pamela; Rock, Daniel (2023). “GPTs are GPTs: An early look at the labor market impact potential of large language models.” arXiv:2303.10130.',
      'Anthropic (April 2025). “Anthropic Economic Index: AI’s impact on software development.”',
      'Massenkoff, Maxim; McCrory, Peter (March 2026). “Labor market impacts of AI: A new measure and early evidence.” Anthropic.',
      'Brynjolfsson, Erik; Chandar, Bharat; Chen, Ruyu (2025). “Canaries in the coal mine? Six facts about the recent employment effects of artificial intelligence.” Stanford Digital Economy.',
      'Hampole, Menaka; Papanikolaou, Dimitris; Schmidt, Lawrence D.W.; Seegmiller, Bryan (2025). “Artificial intelligence and the labor market.” NBER Working Paper 33509.',
      'Acemoglu, Daron; Autor, David; Hazell, Jonathon; Restrepo, Pascual (2022). “Artificial intelligence and jobs: Evidence from online vacancies.” Journal of Labor Economics, 40(S1), S293–S340.',
      'Gans, Joshua S.; Goldfarb, Avi (2025). “O-Ring Automation.” NBER Working Paper 34639.',
      'Autor, David H.; Thompson, N. (2025). “Expertise.” NBER Working Paper 33941.',
      'Handa, Kunal et al. (2025). “Which economic tasks are performed with AI? Evidence from millions of Claude conversations.”',
    ],
  },
  {
    group: 'Practitioner accounts and reference documentation',
    items: [
      'Shipper, Dan (May 2026). “After Automation.” Every.',
      'Klaassen, Kieran (April 2026). “You’re the bread in the AI sandwich.” Every.',
      'OWASP. “Top 10 for Large Language Model Applications” (2025) and “Top 10 for Agentic Applications” (December 2025).',
      'Anthropic. Claude Code documentation. Available at docs.anthropic.com.',
    ],
  },
]

// Convenience lookups
export const modulesById = Object.fromEntries(modules.map((m) => [String(m.id), m]))
export const partsById = Object.fromEntries(parts.map((p) => [String(p.id), p]))

// Routing
export const BASE = '/ase26'
export function toHref(slug) {
  return slug ? `${BASE}/${slug}` : BASE
}
