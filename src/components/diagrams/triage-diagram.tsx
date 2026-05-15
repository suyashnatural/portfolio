export function TriageDiagram() {
  return (
    <svg
      viewBox="0 0 920 380"
      role="img"
      aria-label="Artifact-first triage pipeline with evidence citations and confidence scoring"
      className="h-auto w-full"
    >
      <rect
        x="10"
        y="10"
        width="900"
        height="360"
        rx="18"
        fill="hsl(var(--muted) / 0.35)"
        stroke="hsl(var(--border))"
      />

      <g fontFamily="var(--font-sans)">
        <text x="34" y="44" fontSize="16" fontWeight="600" fill="hsl(var(--fg))">
          Failure triage pipeline (sanitized)
        </text>
        <text x="34" y="68" fontSize="12" fill="hsl(var(--muted-fg))">
          Artifacts → Evidence-first analysis → Confidence bands → Safe next actions
        </text>
      </g>

      {[
        { x: 34, title: "Artifact bundle", body: "Screenshots • video • logs • metadata" },
        { x: 252, title: "Evidence-first analysis", body: "Cite timestamps/log lines • avoid guessing" },
        { x: 470, title: "Confidence scoring", body: "High / Medium / Low based on evidence quality" },
        { x: 688, title: "Next actions", body: "Smallest safe verification + remediation steps" },
      ].map((c) => (
        <g key={c.title}>
          <rect
            x={c.x}
            y="120"
            width="198"
            height="140"
            rx="14"
            fill="hsl(var(--card))"
            stroke="hsl(var(--border))"
          />
          <text
            x={c.x + 18}
            y="150"
            fontSize="13"
            fontWeight="600"
            fill="hsl(var(--fg))"
            fontFamily="var(--font-sans)"
          >
            {c.title}
          </text>
          <text
            x={c.x + 18}
            y="176"
            fontSize="12"
            fill="hsl(var(--muted-fg))"
            fontFamily="var(--font-sans)"
          >
            {c.body}
          </text>
        </g>
      ))}

      <path
        d="M 232 190 C 242 190, 244 190, 252 190"
        stroke="hsl(var(--border))"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 450 190 C 460 190, 462 190, 470 190"
        stroke="hsl(var(--border))"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 668 190 C 678 190, 680 190, 688 190"
        stroke="hsl(var(--border))"
        strokeWidth="2"
        fill="none"
      />

      <g>
        <rect
          x="34"
          y="284"
          width="852"
          height="66"
          rx="14"
          fill="hsl(var(--card))"
          stroke="hsl(var(--border))"
        />
        <text x="54" y="312" fontSize="13" fontWeight="600" fill="hsl(var(--fg))">
          Guardrails
        </text>
        <text x="54" y="336" fontSize="12" fill="hsl(var(--muted-fg))">
          Human approval • show evidence • prefer reversible fixes • be explicit when low confidence
        </text>
      </g>
    </svg>
  );
}

