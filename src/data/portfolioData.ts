export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    highlight: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Machine Learning' | 'Deep Learning' | 'Big Data' | 'Data Cleaning' | 'Predictive Analytics';
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  metrics: { label: string; value: string }[];
  codeSnippet: string;
  demoType: 'churn' | 'classifier' | 'bigdata' | 'datacleaning' | 'sales';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  tools: string[];
  icon: string;
}

export interface WorkflowStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  tools: string[];
}

export interface ExpertiseArea {
  id: string;
  title: string;
  summary: string;
  keyTechniques: string[];
  impactMetric: string;
  icon: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Ahmad Mohammed",
    title: "Data Scientist & Machine Learning Expert",
    photo: "/src/assets/images/ahmad_mohammed.jpg",
    photoFallback: "https://i.ibb.co/QjtmFYbq/Whats-App-Image-2026-09-26-at-20-26-05-1.jpg",
    headline: "Turning Data Into Intelligent Solutions.",
    subheadline: "Data Scientist specializing in Machine Learning, Deep Learning, Big Data, and Data Cleaning — transforming complex data into actionable insights and intelligent systems.",
    availability: "Available for Data Science & AI Projects",
    email: "ustazahmaduadamu@gmail.com",
    phoneDisplay: "+234 803 777 4708",
    whatsappNumber: "2348037774708",
    whatsappUrl: "https://wa.me/2348037774708?text=Hello%20Ahmad,%20I%20would%20like%20to%20discuss%20a%20Data%20Science%20project.",
    stats: [
      { label: "Projects Completed", value: 50, suffix: "+" },
      { label: "Technologies Mastered", value: 10, suffix: "+" },
      { label: "Data-Driven Precision", value: 100, suffix: "%" },
      { label: "Pipeline Reliability", value: 99.8, suffix: "%" }
    ],
    socials: [
      { name: "LinkedIn", url: "https://linkedin.com", ariaLabel: "Visit Ahmad Mohammed's LinkedIn Profile" },
      { name: "GitHub", url: "https://github.com", ariaLabel: "Explore Ahmad Mohammed's GitHub Repositories" },
      { name: "X / Twitter", url: "https://x.com", ariaLabel: "Follow Ahmad Mohammed on X" },
      { name: "Facebook", url: "https://facebook.com", ariaLabel: "Connect on Facebook" },
      { name: "Instagram", url: "https://instagram.com", ariaLabel: "Follow on Instagram" },
      { name: "WhatsApp", url: "https://wa.me/2348037774708", ariaLabel: "Message directly on WhatsApp" },
      { name: "Email", url: "mailto:ustazahmaduadamu@gmail.com", ariaLabel: "Send an email to Ahmad Mohammed" }
    ]
  },

  about: {
    bioParagraph1: "I am a passionate Data Scientist and Machine Learning practitioner dedicated to transforming raw, noisy, and unstructured datasets into strategic intelligence and scalable predictive systems. With hands-on mastery spanning classical statistical learning to modern deep neural networks and big data architectures, I bridge the gap between abstract mathematical models and production-ready enterprise applications.",
    bioParagraph2: "My core philosophy centers on high data hygiene: intelligent algorithms are only as dependable as the integrity of the data that feeds them. Whether engineering automated ETL pipelines for terabyte-scale records, fine-tuning computer vision and transformer models, or designing interpretable churn predictors, my focus remains rigorously oriented toward driving tangible business outcomes.",
    keyExpertisePoints: [
      {
        title: "Extracting Insights from Large Datasets",
        description: "Uncovering latent correlations, anomalies, and multi-dimensional behavioral patterns from heterogeneous data lakes."
      },
      {
        title: "Cleaning & Preparing Messy Data",
        description: "Systematic imputation, outlier boundary detection, schema validation, and rigorous feature normalization."
      },
      {
        title: "Building Machine Learning Models",
        description: "Supervised and unsupervised models engineered for low latency, high generalization, and clear interpretability."
      },
      {
        title: "Developing Deep Learning Systems",
        description: "Designing convolutional, recurrent, and transformer architectures tailored for computer vision and NLP."
      },
      {
        title: "Working with Large-Scale Data",
        description: "Leveraging Apache Spark and distributed computing clusters for resilient streaming and batch processing."
      },
      {
        title: "Creating Data-Driven Solutions",
        description: "Translating ambiguous corporate objectives into robust predictive engines with observable return on investment."
      }
    ]
  },

  skillCategories: [
    {
      id: "data-science",
      name: "Data Science",
      description: "Mathematical computing, statistical analysis, and fundamental exploratory data science.",
      skills: [
        { name: "Python", level: 96, highlight: "Vectorized computing, asynchronous scripting, and clean OOP architecture" },
        { name: "Pandas", level: 95, highlight: "High-performance tabular manipulation, multi-indexing, and time-series resampling" },
        { name: "NumPy", level: 94, highlight: "N-dimensional array operations, matrix linear algebra, and broadcasting" },
        { name: "SciPy", level: 90, highlight: "Hypothesis testing, statistical distributions, numerical optimization" },
        { name: "Scikit-learn", level: 95, highlight: "Pipeline design, cross-validation, grid search, and ensemble estimators" }
      ]
    },
    {
      id: "machine-learning",
      name: "Machine Learning",
      description: "Supervised and unsupervised learning algorithms with rigorous validation protocols.",
      skills: [
        { name: "Regression", level: 94, highlight: "Linear, Ridge, Lasso, ElasticNet, Polynomial, and GLMs" },
        { name: "Classification", level: 95, highlight: "XGBoost, LightGBM, Random Forests, Support Vector Machines" },
        { name: "Clustering", level: 90, highlight: "K-Means, DBSCAN, Hierarchical agglomerative clustering, Gaussian Mixtures" },
        { name: "Feature Engineering", level: 96, highlight: "Target encoding, interaction terms, PCA dimensionality reduction, scaling" },
        { name: "Model Evaluation", level: 95, highlight: "ROC-AUC, Precision-Recall, F1 Macro, Confusion Matrices, SHAP interpretability" },
        { name: "Predictive Analytics", level: 94, highlight: "Probabilistic forecasting, customer lifetime value, survival curves" }
      ]
    },
    {
      id: "deep-learning",
      name: "Deep Learning",
      description: "Complex neural representations for perception, sequential signals, and multimodal tasks.",
      skills: [
        { name: "TensorFlow", level: 90, highlight: "Keras functional API, custom training loops, and TensorBoard profiling" },
        { name: "PyTorch", level: 94, highlight: "Dynamic autograd, custom Dataset/DataLoader pipelines, CUDA acceleration" },
        { name: "Neural Networks", level: 92, highlight: "Multilayer Perceptrons, backpropagation dynamics, regularization (Dropout/BatchNorm)" },
        { name: "CNN", level: 92, highlight: "Residual Networks, Feature Pyramids, object detection, visual classification" },
        { name: "RNN / LSTM", level: 88, highlight: "Sequence modeling, gated recurrent units, temporal memory preservation" },
        { name: "Transformers", level: 89, highlight: "Self-attention mechanisms, BERT/RoBERTa embeddings, fine-tuning LLMs" }
      ]
    },
    {
      id: "big-data",
      name: "Big Data",
      description: "Distributed architectures capable of handling petabyte-scale data lakes with low latency.",
      skills: [
        { name: "Apache Spark", level: 92, highlight: "PySpark DataFrames, Spark SQL, partitioned transforms, and memory tuning" },
        { name: "Hadoop", level: 86, highlight: "HDFS architecture, distributed storage mechanics, MapReduce paradigms" },
        { name: "Distributed Computing", level: 90, highlight: "Cluster worker coordination, data skew mitigation, shuffle optimization" },
        { name: "Large-Scale Processing", level: 91, highlight: "Batch ETL pipelines, event streaming ingestion, Parquet/Delta lake storage" }
      ]
    },
    {
      id: "data-cleaning",
      name: "Data Cleaning",
      description: "The foundation of reliable AI: data cleansing, validation, and automated hygiene pipelines.",
      skills: [
        { name: "Data Preprocessing", level: 98, highlight: "Categorical binning, robust scaling, datetime parsing, text normalization" },
        { name: "Missing Data Handling", level: 96, highlight: "Iterative SVD imputation, KNN imputer, forward/backward fill regimes" },
        { name: "Outlier Detection", level: 94, highlight: "IQR fences, Isolation Forests, Z-score thresholds, Local Outlier Factor" },
        { name: "Data Transformation", level: 95, highlight: "Box-Cox power transforms, log stabilization, quantile uniform normalization" },
        { name: "Feature Engineering", level: 96, highlight: "Domain-specific ratio generation, rolling statistics, lagged variables" },
        { name: "Data Validation", level: 95, highlight: "Pydantic & Great Expectations schema contracts, automated anomaly alerts" }
      ]
    },
    {
      id: "visualization",
      name: "Visualization",
      description: "Translating multidimensional metrics into intuitive executive dashboards and visual narratives.",
      skills: [
        { name: "Matplotlib", level: 95, highlight: "Publication-ready multi-axis plots, custom style sheets, mathematical annotations" },
        { name: "Seaborn", level: 95, highlight: "Pairplots, statistical regression overlays, kernel density heatmaps" },
        { name: "Plotly", level: 93, highlight: "Interactive WebGL 3D scatter plots, dynamic drill-down dashboards" },
        { name: "Power BI", level: 90, highlight: "DAX calculations, star schema data modeling, executive KPI scorecards" },
        { name: "Tableau", level: 88, highlight: "LOD expressions, interactive parameter actions, geospatial mapping" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "customer-churn-prediction",
      title: "Customer Churn Prediction",
      category: "Machine Learning",
      shortDescription: "End-to-end predictive machine learning system forecasting customer attrition probability with SHAP explainability.",
      fullDescription: "A production-grade customer retention intelligence engine that analyzes multi-channel user behaviors, subscription tenures, transaction frequency, and customer service escalation events. Utilizes gradient-boosted ensembles calibrated for cost-sensitive classification, empowering enterprise account managers to proactively intervene before customer contract expiration.",
      technologies: ["Python", "Scikit-Learn", "XGBoost", "SHAP", "Pandas", "Plotly"],
      image: "/src/assets/images/project_churn_prediction_1791985487172.jpg",
      metrics: [
        { label: "AUC-ROC", value: "0.94" },
        { label: "Churn Accuracy", value: "91.2%" },
        { label: "Annual Savings", value: "$420K" }
      ],
      demoType: "churn",
      codeSnippet: `import pandas as pd
import numpy as np
from xgboost import XGBClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import roc_auc_score, classification_report
import shap

# 1. Feature Preprocessing & Target Extraction
df = pd.read_parquet("enterprise_telecom_churn.parquet")
features = ['tenure_months', 'monthly_charges', 'total_charges', 
            'support_tickets_last_60d', 'contract_duration_type', 'payment_delay_days']
X = df[features]
y = df['churn_flag']

# 2. Train/Test Split with Stratified Sampling
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)

# 3. Model Training with Hyperparameter Regularization
model = XGBClassifier(
    n_estimators=300,
    learning_rate=0.03,
    max_depth=5,
    subsample=0.8,
    colsample_bytree=0.8,
    eval_metric="auc",
    random_state=42
)
model.fit(X_train, y_train, eval_set=[(X_test, y_test)], verbose=False)

# 4. Evaluation & SHAP Interpretability
y_pred_proba = model.predict_proba(X_test)[:, 1]
print(f"ROC-AUC Score: {roc_auc_score(y_test, y_pred_proba):.4f}")

explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)`
    },
    {
      id: "deep-learning-image-classifier",
      title: "Deep Learning Image Classifier",
      category: "Deep Learning",
      shortDescription: "Multi-class convolutional neural network leveraging transfer learning and activation layer maps.",
      fullDescription: "A high-performance computer vision system trained on over 500,000 real-world images. Incorporates residual bottleneck architectures with self-attention heads to identify high-variance visual classes under varying illumination, partial occlusion, and extreme angles with real-time inference latency under 24 milliseconds.",
      technologies: ["PyTorch", "TorchVision", "ResNet-50", "CUDA", "OpenCV", "TensorBoard"],
      image: "/src/assets/images/project_image_classifier_1791985487326.jpg",
      metrics: [
        { label: "Top-1 Accuracy", value: "96.4%" },
        { label: "Inference Latency", value: "22ms" },
        { label: "Classes Detected", value: "120+" }
      ],
      demoType: "classifier",
      codeSnippet: `import torch
import torch.nn as nn
from torchvision import models, transforms
from PIL import Image

class VisualInspectionClassifier(nn.Module):
    def __init__(self, num_classes=120):
        super().__init__()
        # Backbone ResNet-50 with feature pooling
        self.backbone = models.resnet50(weights=models.ResNet50_Weights.DEFAULT)
        in_features = self.backbone.fc.in_features
        self.backbone.fc = nn.Identity()
        
        # Dense classification head with dropout regularization
        self.classifier = nn.Sequential(
            nn.Linear(in_features, 512),
            nn.BatchNorm1d(512),
            nn.Mish(),
            nn.Dropout(0.4),
            nn.Linear(512, num_classes)
        )
        
    def forward(self, x):
        features = self.backbone(x)
        logits = self.classifier(features)
        return logits, features

# Inference Pipeline
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = VisualInspectionClassifier().to(device)
model.eval()`
    },
    {
      id: "big-data-analytics-platform",
      title: "Big Data Analytics Platform",
      category: "Big Data",
      shortDescription: "Distributed computing architecture processing 2.5 TB/s of streaming telemetry via Apache Spark.",
      fullDescription: "Architected a fault-tolerant big data ingestion and analytics pipeline combining Kafka message queues, Apache Spark structured streaming, and Delta Lake storage. Enables real-time windowed aggregations across millions of concurrent IoT transactions with sub-second dashboard query response.",
      technologies: ["Apache Spark", "PySpark", "Hadoop HDFS", "Kafka", "Delta Lake", "Parquet"],
      image: "/src/assets/images/project_big_data_platform_1791985487777.jpg",
      metrics: [
        { label: "Throughput", value: "2.5 TB/s" },
        { label: "Daily Records", value: "14.2M" },
        { label: "Latency", value: "< 1.2s" }
      ],
      demoType: "bigdata",
      codeSnippet: `from pyspark.sql import SparkSession
from pyspark.sql.functions import from_json, col, window, count, avg
from pyspark.sql.types import StructType, StructField, StringType, DoubleType, TimestampType

# Initialize Spark Distributed Session
spark = SparkSession.builder \\
    .appName("RealtimeDataAnalyticsCluster") \\
    .config("spark.sql.shuffle.partitions", "200") \\
    .config("spark.streaming.backpressure.enabled", "true") \\
    .getOrCreate()

# Kafka Stream Ingestion
stream_df = spark.readStream \\
    .format("kafka") \\
    .option("kafka.bootstrap.servers", "cluster-kafka:9092") \\
    .option("subscribe", "telemetry-events") \\
    .load()`
    },
    {
      id: "data-cleaning-pipeline",
      title: "Data Cleaning & Transformation Pipeline",
      category: "Data Cleaning",
      shortDescription: "Automated framework for deduplicating, validating schemas, handling missing values, and engineering features.",
      fullDescription: "An automated data engineering pipeline designed to handle messy enterprise datasets. Replaces brittle ad-hoc cleaning scripts with declarative schema validations, multivariate outlier detection algorithms, and deterministic missing-value imputers, yielding clean, ML-ready Parquet tables with 100% auditability.",
      technologies: ["Python", "Pandas", "Scipy", "Great Expectations", "NumPy", "Pydantic"],
      image: "/src/assets/images/project_data_pipeline_1791985489277.jpg",
      metrics: [
        { label: "Data Quality Score", value: "99.8%" },
        { label: "Cleaning Speedup", value: "4.8x" },
        { label: "Error Reduction", value: "87%" }
      ],
      demoType: "datacleaning",
      codeSnippet: `import pandas as pd
import numpy as np
from sklearn.impute import KNNImputer
from scipy import stats

class EnterpriseDataCleanser:
    def __init__(self, z_score_threshold=3.0):
        self.z_thresh = z_score_threshold
        self.imputer = KNNImputer(n_neighbors=5)
        
    def clean_dataframe(self, raw_df: pd.DataFrame) -> pd.DataFrame:
        df = raw_df.copy()
        
        # 1. Deduplication on composite keys
        df.drop_duplicates(inplace=True)
        
        # 2. Outlier rejection via robust Z-score
        numeric_cols = df.select_dtypes(include=[np.number]).columns
        z_scores = np.abs(stats.zscore(df[numeric_cols].fillna(df[numeric_cols].median())))
        df = df[(z_scores < self.z_thresh).all(axis=1)]
        
        # 3. Multivariate KNN Imputation
        df[numeric_cols] = self.imputer.fit_transform(df[numeric_cols])
        
        return df`
    },
    {
      id: "sales-prediction-system",
      title: "Sales Prediction System",
      category: "Predictive Analytics",
      shortDescription: "Time-series predictive analytics forecasting future revenue, inventory requirements, and demand shifts.",
      fullDescription: "An advanced sales forecasting system combining SARIMAX time-series decomposition with LightGBM exogenous regressors. Accurately anticipates seasonal demand spikes, supply chain disruptions, and promotion elasticity across multi-regional distribution hubs.",
      technologies: ["Python", "Statsmodels", "LightGBM", "Prophet", "Seaborn", "Plotly"],
      image: "/src/assets/images/project_sales_forecasting_1791985488461.jpg",
      metrics: [
        { label: "Forecast Accuracy", value: "96.7%" },
        { label: "MAPE Reduction", value: "3.2%" },
        { label: "Quarterly Projected", value: "$155.3M" }
      ],
      demoType: "sales",
      codeSnippet: `import numpy as np
import pandas as pd
import lightgbm as lgb
from statsmodels.tsa.seasonal import seasonal_decompose

# 1. Ingest Time Series & Extract Multi-Period Lags
ts_df = pd.read_csv("regional_sales_history.csv", parse_dates=["timestamp"])
ts_df = ts_df.sort_values("timestamp")

for lag in [1, 7, 14, 30, 90]:
    ts_df[f"sales_lag_{lag}"] = ts_df["revenue"].shift(lag)

ts_df["rolling_mean_7d"] = ts_df["revenue"].shift(1).rolling(7).mean()
ts_df["rolling_std_30d"] = ts_df["revenue"].shift(1).rolling(30).std()

# 2. Exogenous Regressor Training
features = [c for c in ts_df.columns if "lag" in c or "rolling" in c]
model = lgb.LGBMRegressor(n_estimators=400, learning_rate=0.04, objective="regression_l1")
model.fit(ts_df[features].dropna(), ts_df["revenue"].loc[ts_df[features].dropna().index])`
    }
  ] as ProjectItem[],

  services: [
    {
      id: "data-analysis",
      title: "Data Analysis",
      description: "Transform raw data into meaningful insights with deep statistical exploration, hypothesis validation, and executive visual reporting.",
      deliverables: ["Exploratory Data Analysis (EDA) Reports", "Statistical Hypothesis Testing", "Executive Dashboards (Power BI / Plotly)", "Key Driver & Correlation Analysis"],
      tools: ["Python", "Pandas", "Plotly", "Power BI", "Seaborn"],
      icon: "BarChart3"
    },
    {
      id: "machine-learning",
      title: "Machine Learning",
      description: "Build predictive models that solve real-world problems, from customer churn prevention to automated scoring and risk assessment.",
      deliverables: ["Custom Supervised Classifiers & Regressors", "Clustering & Segmentation Models", "Model Calibration & Hyperparameter Tuning", "Interpretability Reports (SHAP / LIME)"],
      tools: ["Scikit-learn", "XGBoost", "LightGBM", "Optuna", "MLflow"],
      icon: "BrainCircuit"
    },
    {
      id: "deep-learning",
      title: "Deep Learning",
      description: "Develop neural-network-based intelligent applications specializing in computer vision, sequence prediction, and transformer embeddings.",
      deliverables: ["Computer Vision & Image Classification", "Object Detection & Segmentation", "Recurrent & Attention Architectures", "High-throughput GPU Inference APIs"],
      tools: ["PyTorch", "TensorFlow", "TorchVision", "CUDA", "OpenCV"],
      icon: "Network"
    },
    {
      id: "big-data-analytics",
      title: "Big Data Analytics",
      description: "Process and analyze large-scale datasets efficiently using distributed computing clusters that scale with corporate data volume.",
      deliverables: ["PySpark Distributed Data Pipelines", "Kafka Real-Time Streaming Ingestion", "Data Lake Storage Optimization (Parquet/Delta)", "Cluster Shuffle & Memory Tuning"],
      tools: ["Apache Spark", "Hadoop", "PySpark", "Kafka", "Delta Lake"],
      icon: "DatabaseZap"
    },
    {
      id: "data-cleaning",
      title: "Data Cleaning",
      description: "Transform messy and inconsistent data into high-quality datasets through robust preprocessing, imputation, and schema validation.",
      deliverables: ["Automated Data Hygiene Pipelines", "Multivariate Outlier & Noise Rejection", "Deterministic & ML Imputation", "Data Contract & Schema Validation (Great Expectations)"],
      tools: ["Pandas", "Scipy", "KNN Imputer", "Pydantic", "Great Expectations"],
      icon: "Sparkles"
    },
    {
      id: "ai-solutions",
      title: "AI Solutions",
      description: "Build intelligent, data-driven solutions for businesses and organizations seeking to monetize and automate their data pipelines.",
      deliverables: ["Full-Stack AI Deployment Architecture", "REST & FastAPIs for Machine Learning", "Real-Time Inference Serving", "Continuous Performance Monitoring & Drift Detection"],
      tools: ["FastAPI", "Docker", "ONNX Runtime", "Python", "Cloud Run"],
      icon: "Cpu"
    }
  ] as ServiceItem[],

  workflow: [
    {
      number: "01",
      title: "Collect",
      tagline: "Gather relevant data from diverse enterprise sources.",
      description: "Aggregating structured and unstructured data from transactional relational databases, API endpoints, flat files, cloud buckets, and real-time event brokers into a central repository.",
      deliverables: ["Data Ingestion Connectors", "Raw Lake Ingestion Schema", "Access Control & Data Auditing"],
      tools: ["SQL", "Kafka", "REST APIs", "AWS S3 / Cloud Storage"]
    },
    {
      number: "02",
      title: "Clean",
      tagline: "Remove errors, inconsistencies, and unwanted information.",
      description: "Applying surgical deduplication, structural type casting, missing value imputation strategies, and statistical outlier boundary identification to establish immaculate data hygiene.",
      deliverables: ["Data Cleansing Pipeline", "Quality Validation Report", "Sanitized Baseline Parquet Tables"],
      tools: ["Pandas", "NumPy", "Scipy", "Great Expectations"]
    },
    {
      number: "03",
      title: "Explore",
      tagline: "Discover patterns and relationships.",
      description: "Performing in-depth Exploratory Data Analysis (EDA) to expose collinearity, class imbalances, latent trends, seasonality, and statistical correlations that guide model architecture.",
      deliverables: ["Interactive Statistical Notebooks", "Correlation Matrices", "Distribution & Anomaly Visuals"],
      tools: ["Seaborn", "Plotly", "Matplotlib", "SciPy Stats"]
    },
    {
      number: "04",
      title: "Engineer",
      tagline: "Create useful features for modeling.",
      description: "Crafting predictive mathematical representations from raw features: rolling aggregations, lag variables, target encodings, text embeddings, and dimensionality reduction.",
      deliverables: ["Engineered Feature Matrix", "Feature Importance Rankings", "Data Preprocessing Transformer Pipeline"],
      tools: ["Scikit-learn Pipelines", "PCA", "Feature-engine"]
    },
    {
      number: "05",
      title: "Model",
      tagline: "Build and train machine learning/deep learning models.",
      description: "Selecting, training, and benchmarking candidate algorithms ranging from tree ensembles (XGBoost/LightGBM) to deep neural networks using Bayesian hyperparameter optimization.",
      deliverables: ["Trained Model Weights", "Hyperparameter Search History", "Cross-Validation Convergence Curves"],
      tools: ["PyTorch", "TensorFlow", "XGBoost", "Optuna"]
    },
    {
      number: "06",
      title: "Evaluate",
      tagline: "Measure model performance.",
      description: "Testing candidate architectures on unseen holdout splits using domain-specific metrics (ROC-AUC, Precision/Recall, MAPE, Log-Loss) and global SHAP interpretability analysis.",
      deliverables: ["Model Evaluation Scorecard", "SHAP Feature Contribution Plots", "Error Distribution Diagnostics"],
      tools: ["Scikit-learn Metrics", "SHAP", "LIME", "TensorBoard"]
    },
    {
      number: "07",
      title: "Deploy",
      tagline: "Turn the model into a usable real-world solution.",
      description: "Packaging trained models into containerized, low-latency microservices with automated inference endpoints, monitoring hooks, and data drift safeguards.",
      deliverables: ["Containerized Inference API", "Real-Time Model Serving Pipeline", "Drift & Degradation Telemetry"],
      tools: ["FastAPI", "Docker", "ONNX", "Cloud Infrastructure"]
    }
  ] as WorkflowStep[],

  expertiseAreas: [
    {
      id: "machine-learning",
      title: "Machine Learning",
      summary: "End-to-end predictive modeling using gradient boosting, support vector machines, and ensemble methods with production-grade validation.",
      keyTechniques: ["Cost-sensitive classification", "Non-linear regression", "XGBoost & LightGBM tuning", "SHAP feature interpretability"],
      impactMetric: "94% Average Model AUC",
      icon: "Brain"
    },
    {
      id: "deep-learning",
      title: "Deep Learning",
      summary: "Architecting convolutional, recurrent, and transformer networks for visual classification, sequence modeling, and perception tasks.",
      keyTechniques: ["Custom PyTorch modules", "Transfer learning & fine-tuning", "Residual attention blocks", "TensorRT GPU optimization"],
      impactMetric: "22ms Inference Speed",
      icon: "Cpu"
    },
    {
      id: "big-data",
      title: "Big Data",
      summary: "Distributed computing systems that ingest, transform, and analyze multi-terabyte datasets without memory bottlenecks or worker stalls.",
      keyTechniques: ["PySpark RDD & DataFrames", "Data partitioning & broadcast joins", "HDFS distributed storage", "Kafka stream processing"],
      impactMetric: "14M+ Daily Records",
      icon: "Layers"
    },
    {
      id: "data-engineering",
      title: "Data Engineering",
      summary: "Constructing robust batch and streaming ETL architectures that pipe clean, schema-enforced data from source to model training.",
      keyTechniques: ["Delta Lake / Parquet architectures", "Automated DAG pipelines", "Schema validation & enforcement", "Incremental loading regimes"],
      impactMetric: "99.8% Pipeline Uptime",
      icon: "GitBranch"
    },
    {
      id: "data-cleaning",
      title: "Data Cleaning",
      summary: "Transforming messy real-world datasets into standardized, high-quality feature matrices that maximize ML predictive power.",
      keyTechniques: ["Multivariate KNN imputation", "Isolation forest outlier bounds", "Robust power transformations", "Categorical high-cardinality encoding"],
      impactMetric: "87% Error Reduction",
      icon: "Wand2"
    },
    {
      id: "predictive-analytics",
      title: "Predictive Analytics",
      summary: "Statistical and machine learning approaches to forecast future business metrics, customer demand, and risk exposure.",
      keyTechniques: ["SARIMAX time-series decomposition", "Survival analysis modeling", "Customer churn & lifetime value", "Demand scenario simulation"],
      impactMetric: "96.7% Forecast Accuracy",
      icon: "TrendingUp"
    },
    {
      id: "artificial-intelligence",
      title: "Artificial Intelligence",
      summary: "Practical applied AI systems automating enterprise workflows, decisioning matrices, and intelligent document and visual understanding.",
      keyTechniques: ["Autonomous decision engines", "Semantic search & embeddings", "Multimodal intelligence pipelines", "Model lifecycle governance"],
      impactMetric: "50+ Applied AI Projects",
      icon: "Sparkles"
    },
    {
      id: "data-visualization",
      title: "Data Visualization",
      summary: "Creating clear, interactive dashboards and data visual stories that empower C-suite executives and engineers to act on data.",
      keyTechniques: ["Interactive Plotly & WebGL charts", "Custom Power BI & Tableau reporting", "Complex multidimensional plotting", "Executive KPI scorecards"],
      impactMetric: "100% Executive Clarity",
      icon: "PieChart"
    }
  ] as ExpertiseArea[]
};
