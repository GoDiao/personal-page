import { 
  Github, 
  Linkedin, 
  GraduationCap, 
  Mail, 
  Cpu, 
  Eye, 
  Bot, 
  Code, 
  Zap, 
  Car, 
  Camera,
  Trophy
} from 'lucide-react';

// --- PERSONAL INFORMATION ---
export const PROFILE = {
  name: "Shengjia Diao",
  role: "Algorithm Research Engineer",
  subtitle: "Master's Student at NTU",
  tagline: "Specializing in Computer Vision, Embodied AI & Low-Level Vision",
  email: "diaoshengjia@gmail.com",
  cvLink: "/Shengjia_Diao_CV.pdf",
  about: [
    "Hello! I'm Shengjia Diao, a Master's student at Nanyang Technological University (NTU) and a Video & Audio Engineer Intern at Huawei Singapore Research Center.",
    "My research focuses on Computer Vision, particularly in low-level vision tasks (RGB-to-RAW reconstruction, low-light enhancement), Vision-Language-Action models for embodied AI, and object detection for autonomous driving applications.",
    "With hands-on experience at leading tech companies like Huawei and Infineon Technologies, I bring both theoretical knowledge and practical expertise to cutting-edge AI research. I'm passionate about bridging the gap between computer vision and real-world robotic applications."
  ],
  highlights: [
    "Computer Vision",
    "Embodied AI",
    "Low-Level Vision",
    "VLA Models"
  ]
};

// --- SOCIAL LINKS ---
export const SOCIAL_LINKS = [
  { platform: "GitHub", url: "https://github.com/GoDiao", icon: Github },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/shengjia-diao-800964222/", icon: Linkedin },
  { platform: "Google Scholar", url: "https://scholar.google.com/citations?user=YOURID", icon: GraduationCap },
  { platform: "Email", url: `mailto:${PROFILE.email}`, icon: Mail },
];

// --- NAVIGATION ---
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

// --- EDUCATION ---
export const EDUCATION = [
  {
    school: "Nanyang Technological University (NTU)",
    degree: "Master of Science (Honours)",
    date: "Aug 2024 – Present",
    description: "CGPA: 4.50/5.00 (Highest Distinction). EEE Global Merit Award (Top 1% of cohort).",
    modules: ["Genetic Algorithms and Machine Learning", "Probability and Random Processes", "Natural Language Processing"]
  },
  {
    school: "Nanyang Technological University (NTU)",
    degree: "Bachelor of Engineering (Electrical & Electronic Engineering)",
    date: "Aug 2020 – May 2024",
    description: "CGPA: 4.33/5.00 (Distinction). SM2 Scholarship recipient.",
    modules: []
  }
];

// --- EXPERIENCE ---
export const EXPERIENCE = [
  {
    company: "Huawei Singapore Research Center",
    role: "Video & Audio Engineer Intern",
    department: "",
    date: "Jul 2025 – Present",
    projects: [
      {
        title: "RGB-to-RAW Reconstruction (Computational Photography)",
        points: [
          "Redesigned and implemented an **inverse ISP pipeline** based on Unprocessing (CVPR 2019) enabling RAW-domain processing.",
          "Developed a **lightweight RGB-to-RAW model** inspired by ReRAW (CVPR 2025), achieving significant restoration quality improvements on car-driving datasets.",
          "Benchmarked degradation pipelines (UPI vs. ReRAW) via NAFNet denoising experiments to guide downstream task optimization."
        ],
        metrics: [
          { label: "PSNR", value: "+7.9%", detail: "52.81 → 56.98" },
          { label: "SSIM", value: "+4.4%", detail: "0.91 → 0.95" }
        ]
      },
      {
        title: "Vision–Language–Action (VLA) Models",
        points: [
          "Evaluated **OpenVLA** and **SpatialVLA** in SimplerEnv; fine-tuned SpatialVLA on Bridge dataset.",
          "Pioneered **RAW-to-action learning**: Co-designed RawAdaptationModule with learnable channel projection to bridge 4-channel RAW inputs to pretrained RGB-based encoders.",
          "Integrated ISP denoising into the inference pipeline; validated robustness under noisy RAW inputs."
        ],
        metrics: [
          { label: "Success Rate", value: "+43%", detail: "34.5% → 49.5%" },
          { label: "Zero-Shot", value: "+52%", detail: "0.21 → 0.32" }
        ]
      },
      {
        title: "Agentic AI & Autonomous Driving (AgentDriver Project)",
        points: [
          "Deployed **Qwen2.5-32B** on Ascend NPU via vLLM, implementing a full agent pipeline: perception → memory retrieval → reasoning → trajectory planning.",
          "Full-finetuned **LLaMA2-7B** as a domain-specific planner on NPU, significantly improving inference speed and planning performance.",
          "Built a unified API gateway using LiteLLM to integrate **Gemini 2.0 Flash/Pro**, accelerating research iteration and enabling cost-optimized multi-model evaluation."
        ]
      }
    ],
    tech: ["PyTorch", "OpenVLA", "Ascend NPU", "LLaMA2", "Qwen", "Gemini API", "ISP", "Computational Photography"]
  },
  {
    company: "Infineon Technologies",
    role: "Chip Verification Engineer Intern",
    department: "",
    date: "Dec 2022 – Jul 2023",
    projects: [
      {
        title: "Automation & Verification",
        points: [
            "Optimised the testbench qualification workflow by scripting automation tools in **Tcl and Python**.",
            "Worked closely with chip design engineers to design and execute qualification experiments, aligning verification objectives and accelerating issue identification during RTL bring-up."
        ],
        metrics: [
          { label: "Runtime", value: "-33%", detail: "Reduction in runtime" }
        ]
      }
    ],
    tech: ["Tcl", "Python", "Chip Verification", "Automation", "RTL"]
  }
];

// --- ACHIEVEMENTS ---
export const ACHIEVEMENTS = [
  {
    title: "WSDM Cup - Multilingual Chatbot Arena",
    rank: "Ranked 154/950",
    date: "Dec 2024 – Feb 2025",
    description: "Fine-tuned the Gemma2-9b-it model to optimize performance on multilingual classification tasks. Applied LoRA and int4 quantization to reduce model size and computational overhead.",
    tags: ["Gemma2", "LoRA", "Quantization"]
  },
  {
    title: "LLM 20 Questions",
    rank: "Ranked 188/832",
    date: "May 2024 – Jul 2025",
    description: "Developed a multi-agent dialogue system using quantized Gemma-7b-it for the Kaggle 20 Questions challenge, enabling efficient multi-turn reasoning under memory constraints.",
    tags: ["Multi-Agent", "Kaggle", "Gemma-7b"]
  }
];

// --- SKILLS ---
export const SKILLS = [
  {
    category: "Languages",
    icon: GraduationCap,
    items: ["English (Fluent)", "Mandarin (Native)"]
  },
  {
    category: "Programming",
    icon: Code,
    items: ["Python", "SQL", "TCL", "HTML5", "CSS", "PHP", "JavaScript", "Bash"]
  },
  {
    category: "AI & Tools",
    icon: Cpu,
    items: ["PyTorch", "TensorFlow", "Git", "Tableau", "Navicat", "Certitude"]
  },
  {
    category: "Research Areas",
    icon: Eye,
    items: ["Computer Vision", "Embodied AI", "Low-Level Vision", "VLA Models", "Autonomous Driving"]
  }
];

// --- RESEARCH INTERESTS ---
export const RESEARCH_INTERESTS = [
  {
    title: "Computer Vision",
    description: "Image restoration, low-level vision, inverse ISP, and computational photography.",
    icon: Eye
  },
  {
    title: "Vision-Language-Action Models",
    description: "Embodied AI, robotic manipulation, and multimodal learning for real-world tasks.",
    icon: Bot
  },
  {
    title: "Object Detection",
    description: "Real-time detection systems and autonomous driving perception.",
    icon: Zap
  },
  {
    title: "Low-Light Enhancement",
    description: "Robust vision under challenging illumination conditions.",
    icon: Camera
  },
  {
    title: "Autonomous Driving",
    description: "Vision algorithms for self-driving car perception systems.",
    icon: Car
  }
];