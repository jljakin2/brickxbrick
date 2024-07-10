module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      startServerReadyPattern: "ready on",
      url: ["http://localhost:3000"],
      numberOfRuns: 3,
      settings: {
        preset: "desktop",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        // add your customizations for assertions here
        "color-contrast": "warn",
        "link-in-text-block": "warn",
        "prioritize-lcp-image": "warn",
        "total-byte-weight": "warn",
        "categories:performance": ["error", { minScore: 0.93 }],
        "categories:accessibility": ["error", { minScore: 0.93 }],
        "categories:best-practices": ["error", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.9 }],
      },
    },
  },
};
