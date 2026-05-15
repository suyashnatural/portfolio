export function UhgPlatformDiagram() {
  return (
    <svg
      viewBox="0 0 920 420"
      role="img"
      aria-label="Sanitized architecture overview of the AI-driven QA platform"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="card" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="hsl(var(--card))" stopOpacity="1" />
          <stop offset="1" stopColor="hsl(var(--card))" stopOpacity="1" />
        </linearGradient>
      </defs>

      <rect
        x="10"
        y="10"
        width="900"
        height="400"
        rx="18"
        fill="hsl(var(--muted) / 0.35)"
        stroke="hsl(var(--border))"
      />

      <g fontFamily="var(--font-sans)" fill="hsl(var(--fg))">
        <text x="34" y="44" fontSize="16" fontWeight="600">
          Architecture (sanitized)
        </text>
        <text x="34" y="68" fontSize="12" fill="hsl(var(--muted-fg))">
          Inputs → Orchestration → Generation/Triage → Governance → Visibility
        </text>
      </g>

      <g>
        <rect
          x="34"
          y="98"
          width="250"
          height="120"
          rx="14"
          fill="url(#card)"
          stroke="hsl(var(--border))"
        />
        <text x="54" y="128" fontSize="13" fontWeight="600" fill="hsl(var(--fg))">
          Inputs
        </text>
        <text x="54" y="152" fontSize="12" fill="hsl(var(--muted-fg))">
          Stories, selectors/POMs
        </text>
        <text x="54" y="172" fontSize="12" fill="hsl(var(--muted-fg))">
          CI artifacts (logs/video)
        </text>
      </g>

      <g>
        <rect
          x="335"
          y="98"
          width="250"
          height="120"
          rx="14"
          fill="url(#card)"
          stroke="hsl(var(--border))"
        />
        <text x="355" y="128" fontSize="13" fontWeight="600" fill="hsl(var(--fg))">
          Orchestration
        </text>
        <text x="355" y="152" fontSize="12" fill="hsl(var(--muted-fg))">
          CLI workflows + pipelines
        </text>
        <text x="355" y="172" fontSize="12" fill="hsl(var(--muted-fg))">
          Review gates + routing
        </text>
      </g>

      <g>
        <rect
          x="636"
          y="98"
          width="250"
          height="120"
          rx="14"
          fill="url(#card)"
          stroke="hsl(var(--border))"
        />
        <text x="656" y="128" fontSize="13" fontWeight="600" fill="hsl(var(--fg))">
          Outputs
        </text>
        <text x="656" y="152" fontSize="12" fill="hsl(var(--muted-fg))">
          Generated tests (safe)
        </text>
        <text x="656" y="172" fontSize="12" fill="hsl(var(--muted-fg))">
          Triage reports + links
        </text>
      </g>

      <path
        d="M 284 158 C 305 158, 315 158, 335 158"
        stroke="hsl(var(--border))"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 585 158 C 606 158, 616 158, 636 158"
        stroke="hsl(var(--border))"
        strokeWidth="2"
        fill="none"
      />

      <g>
        <rect
          x="34"
          y="252"
          width="852"
          height="132"
          rx="14"
          fill="hsl(var(--card))"
          stroke="hsl(var(--border))"
        />
        <text x="54" y="282" fontSize="13" fontWeight="600" fill="hsl(var(--fg))">
          Governance & visibility (always-on)
        </text>
        <text x="54" y="306" fontSize="12" fill="hsl(var(--muted-fg))">
          Human-in-the-loop approvals • evals/guardrails • audit logs • dashboards & metrics
        </text>

        <rect
          x="54"
          y="326"
          width="240"
          height="40"
          rx="12"
          fill="hsl(var(--muted) / 0.55)"
          stroke="hsl(var(--border))"
        />
        <text x="72" y="351" fontSize="12" fill="hsl(var(--muted-fg))">
          Safe changes + review
        </text>

        <rect
          x="314"
          y="326"
          width="250"
          height="40"
          rx="12"
          fill="hsl(var(--muted) / 0.55)"
          stroke="hsl(var(--border))"
        />
        <text x="332" y="351" fontSize="12" fill="hsl(var(--muted-fg))">
          Evals + confidence signals
        </text>

        <rect
          x="584"
          y="326"
          width="282"
          height="40"
          rx="12"
          fill="hsl(var(--muted) / 0.55)"
          stroke="hsl(var(--border))"
        />
        <text x="602" y="351" fontSize="12" fill="hsl(var(--muted-fg))">
          Dashboards, uptime, flake rate
        </text>
      </g>
    </svg>
  );
}

