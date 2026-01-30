// Flashcards 004 - אופטימייזרים מתקדמים
export default {
  id: "flashcards-004",
  name: "אופטימייזרים מתקדמים",
  description: "כרטיסיות על Adam, Momentum, ואלגוריתמי אופטימיזציה מתקדמים",
  cards: [
    {
      front: "מהו Momentum ב-SGD?",
      back: "טכניקה שמוסיפה \"תנופה\" לעדכון המשקלים:\nv_t = β×v_{t-1} + ∇C_t\nw = w - α×v_t\nמחזקת תנועות עקביות ומחלישה תנודות."
    },
    {
      front: "מהו פרמטר β ב-Momentum?",
      back: "קובע את משקל הגרדיאנטים הקודמים.\nβ=0: SGD רגיל (ללא מומנטום)\nβ קרוב ל-1: זיכרון ארוך של גרדיאנטים קודמים\nערך נפוץ: β=0.9"
    },
    {
      front: "מהו Adam Optimizer?",
      back: "משלב מומנטום עם adaptive learning rate לכל פרמטר:\n• v_t = β₁v_{t-1} + (1-β₁)∇C (מומנטום)\n• s_t = β₂s_{t-1} + (1-β₂)(∇C)² (ממוצע ריבועים)\n• עדכון: w = w - α×v̂/(√ŝ+ε)"
    },
    {
      front: "מהם ערכי ברירת המחדל של Adam?",
      back: "β₁ = 0.9 (מומנטום)\nβ₂ = 0.999 (ממוצע ריבועים)\nε = 10⁻⁸ (למניעת חלוקה באפס)\nα = 0.001 (learning rate)"
    },
    {
      front: "מהו Bias Correction ב-Adam?",
      back: "תיקון לאיטרציות הראשונות כש-v,s מאותחלים לאפס:\nv̂_t = v_t/(1-β₁ᵗ)\nŝ_t = s_t/(1-β₂ᵗ)\nמונע underestimation בתחילת האימון."
    },
    {
      front: "מהו RMSprop?",
      back: "אופטימייזר עם adaptive learning rate:\ns_t = β×s_{t-1} + (1-β)(∇C)²\nw = w - α×∇C/√(s_t+ε)\nפרמטרים עם גרדיאנטים גדולים מקבלים צעדים קטנים יותר."
    },
    {
      front: "מהו Adagrad?",
      back: "אופטימייזר שצובר את ריבועי הגרדיאנטים לאורך כל האימון:\ns_t = s_{t-1} + (∇C)²\nחיסרון: צעדים הולכים וקטנים עד לעצירה מוקדמת מדי."
    },
    {
      front: "מה היתרון של Adaptive Learning Rate?",
      back: "פרמטרים שונים מקבלים קצבי למידה שונים:\n• פרמטרים עם השפעה גדולה (גרדיאנטים גדולים) → צעדים קטנים\n• פרמטרים עם השפעה קטנה → צעדים גדולים"
    },
    {
      front: "מהו Velocity Vector ב-Momentum?",
      back: "וקטור המהירות v הוא ממוצע משוקלל אקספוננציאלי של הגרדיאנטים:\nv_t = Σ β^(t-k) × ∇C_k\nנותן משקל גבוה יותר לגרדיאנטים אחרונים."
    },
    {
      front: "כיצד Momentum עוזר באזורים שטוחים?",
      back: "באזורים שטוחים הגרדיאנט קטן, אבל המומנטום צובר \"מהירות\" מצעדים קודמים ומאפשר להמשיך להתקדם גם כשהגרדיאנט הנוכחי קטן."
    },
    {
      front: "מה גודל הצעד האפקטיבי עם Momentum?",
      back: "בהתכנסות (גרדיאנט קבוע), גודל הצעד מגיע עד:\nα/(1-β)\nלדוגמה: עם β=0.9 הצעד האפקטיבי גדול פי 10 מ-α."
    },
    {
      front: "מהי הפקודה ליצירת SGD עם Momentum ב-PyTorch?",
      back: "optimizer = torch.optim.SGD(\n  model.parameters(),\n  lr=0.01,\n  momentum=0.9\n)"
    },
    {
      front: "מהי הפקודה ליצירת Adam ב-PyTorch?",
      back: "optimizer = torch.optim.Adam(\n  model.parameters(),\n  lr=0.001,\n  betas=(0.9, 0.999)\n)"
    },
    {
      front: "מתי להעדיף Adam על SGD?",
      back: "Adam: טוב להתכנסות מהירה, פחות רגיש ל-hyperparameters.\nSGD+Momentum: לפעמים מגיע ל-generalization טובה יותר, נפוץ ב-computer vision."
    },
    {
      front: "מהו lr_scheduler ב-PyTorch?",
      back: "כלי לשינוי דינמי של learning rate:\nscheduler = torch.optim.lr_scheduler.StepLR(optimizer, step_size=10, gamma=0.1)\nמפחית את lr פי 10 כל 10 epochs."
    }
  ]
};
