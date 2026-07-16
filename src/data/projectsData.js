export const projects = [
  {
    id: "ptr-request-system",
    title: "Process Tool Request (PTR) System",
    short:
      "A comprehensive, enterprise-grade Django web application designed to manage, track, and analyze tooling requests and preventive maintenance.",
    screenshots: [
      "/projects/ptr-request-system/screenshot-1.jpg",
      "/projects/ptr-request-system/screenshot-2.jpg",
    ],
    details: {
      problem:
        "Manufacturing units need a centralized way to track the complete lifecycle of tooling requests, from initiation to maintenance, across multiple units.",
      constraints: [
        "Granular role-based access control required",
        "Need for automated reporting and PDF generation",
        "Integration of complex preventive maintenance schedules",
      ],
      solution:
        "Developed an enterprise-grade Django application featuring a real-time executive dashboard, complete request lifecycle tracking, and an automated preventive maintenance engine.",
      architecture:
        "Django backend → role-based access control → automated reporting via openpyxl/reportlab → dynamic dashboards.",
      impact: [
        "Enabled full tracking from request initiation to short-closing",
        "Automated scheduling for preventive and breakdown maintenance",
        "Streamlined executive reporting with Excel and PDF history cards",
      ],
      tech: ["Django", "Python", "openpyxl", "reportlab", "HTML5", "CSS"],
      repo: "https://github.com/sumedhp23/ptr_request_system",
    },
  },

  {
    id: "cnc-tool-lifecycle-management",
    title: "CNC Tool Lifecycle Management Platform",
    short:
      "A robust, Django-based web application backed by MSSQL to track and manage the lifecycle, performance, and replacement metrics of CNC machining tools.",
    screenshots: [
      "/projects/cnc-tool-lifecycle-management/screenshot-1.jpg",
      "/projects/cnc-tool-lifecycle-management/screenshot-2.jpg",
    ],
    details: {
      problem:
        "Tracking the performance, replacement metrics, and lifecycle of CNC machining tools is difficult without a centralized tracking platform.",
      constraints: [
        "Need for integration with Microsoft SQL Server (MSSQL)",
        "System must be easily deployable on any OS",
        "Requirement for automated database initialization",
      ],
      solution:
        "Built a fully Dockerized Django web application backed by MSSQL, featuring automated database initialization and lifecycle tracking capabilities.",
      architecture:
        "Dockerized environment → Django backend (pyodbc) → Microsoft SQL Server 2022 database.",
      impact: [
        "Simplified deployment across all OS platforms via Docker",
        "Automated SQL database schema and seed data initialization",
        "Enabled detailed tracking of tool performance and replacement metrics",
      ],
      tech: ["Django", "Python", "Docker", "Microsoft SQL Server", "pyodbc"],
      repo: "https://github.com/sumedhp23/cnc-tool-lifecycle-management",
    },
  },
  {
    id: "product-demand-forecasting",
    title: "Product Demand Forecasting",
    short:
      "Built a demand forecasting system to predict product-level demand using historical sales data.",
    screenshots: [
      "/projects/product-demand-forecasting/screenshot-1.jpg",
      "/projects/product-demand-forecasting/screenshot-2.jpg",
    ],
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
      repo: "https://github.com/sumedhp23/product-demand-forecasting",
    },
  },

  {
    id: "fraud-detection",
    title: "Transaction Risk Modeling & Fraud Detection",
    short:
      "Developed an end-to-end fraud detection and transaction risk scoring system for imbalanced financial data.",
    screenshots: [
      "/projects/fraud-detection/screenshot-1.jpg",
      "/projects/fraud-detection/screenshot-2.jpg",
    ],
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
    screenshots: [
      "/projects/weather-intelligence/screenshot-1.jpg",
      "/projects/weather-intelligence/screenshot-2.jpg",
    ],
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
      demo: "https://weather-forecast-django.onrender.com",
    },
  },
];
