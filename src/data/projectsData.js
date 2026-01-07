export const projects = [
  {
    id: "product-demand-forecasting",
    title: "Product Demand Forecasting",
    short:
      "Built a demand forecasting system to predict product-level demand using historical sales data.",
    details: {
      problem:
        "Businesses often struggle with inventory planning due to inaccurate demand estimation, leading to stockouts or excess inventory.",
      constraints: [
        "Seasonality and demand fluctuations",
        "Limited historical data for some products",
        "Need for interpretable predictions",
      ],
      solution:
        "Developed a forecasting pipeline using historical sales data, applying time-based feature engineering and regression-based models to predict future demand.",
      architecture:
        "Historical sales data → preprocessing & feature engineering → forecasting models → demand predictions for planning.",
      impact: [
        "Improved demand visibility for inventory planning",
        "Reduced risk of overstocking and understocking",
        "Built a foundation for scalable forecasting workflows",
      ],
      tech: ["Python", "Pandas", "Scikit-learn", "Time Series Analysis"],
      repo: null,
    },
  },

  {
    id: "food-analysis",
    title: "Food Analysis",
    short:
      "Exploratory analysis of food-related datasets to uncover quality indicators and category-level patterns.",
    details: {
      problem:
        "Food datasets often lack structured insights around quality, trends, and measurable indicators.",
      constraints: [
        "Unstructured and semi-structured datasets",
        "No predefined quality benchmarks",
      ],
      solution:
        "Performed exploratory data analysis to identify trends, correlations, and candidate features for deeper modeling.",
      architecture:
        "Raw datasets → cleaning & preprocessing → exploratory analysis → insight generation.",
      impact: [
        "Identified early signals for quality assessment",
        "Created a base for future predictive modeling",
      ],
      tech: ["Python", "Pandas", "Exploratory Data Analysis"],
      repo: null,
    },
  },

  {
    id: "fraud-detection",
    title: "Transaction Risk Modeling & Fraud Detection",
    short:
      "Developed an end-to-end fraud detection and transaction risk scoring system for imbalanced financial data.",
    details: {
      problem:
        "Financial fraud datasets are highly imbalanced, making it difficult to detect fraudulent transactions without increasing false positives.",
      constraints: [
        "Extreme class imbalance",
        "Need to minimize false negatives",
        "Requirement for explainable risk scores",
      ],
      solution:
        "Built a machine learning pipeline with feature engineering, multiple models, and probability-based risk scoring.",
      architecture:
        "Raw transactions → preprocessing → ML models → probability-based risk scoring.",
      impact: [
        "Improved ROC-AUC from ~0.92 to ~0.98",
        "Reduced false negatives by ~30%",
        "Converted predictions into actionable risk scores",
      ],
      tech: [
        "Python",
        "Scikit-learn",
        "TensorFlow",
        "Pandas",
        "Machine Learning",
      ],
      repo: "https://github.com/sumedhp23/Fraud-Detection-and-Risk-Scoring",
    },
  },

  {
    id: "weather-intelligence",
    title: "Weather Intelligence Platform",
    short:
      "Built a scalable weather intelligence platform with real-time API ingestion and backend processing.",
    details: {
      problem:
        "Live weather APIs are inconsistent and unreliable without proper validation and structuring.",
      constraints: [
        "External API reliability",
        "Schema inconsistencies",
        "Low-latency requirements",
      ],
      solution:
        "Designed backend services to ingest, validate, normalize, and serve real-time weather data.",
      architecture:
        "External APIs → ingestion → validation → structured storage → REST endpoints.",
      impact: [
        "Enabled reliable real-time weather data access",
        "Improved backend data consistency",
        "Designed system ready for forecasting extensions",
      ],
      tech: ["Django", "Python", "REST APIs", "SQL"],
      repo: "https://github.com/sumedhp23/weather-forecast-django",
    },
  },
];
