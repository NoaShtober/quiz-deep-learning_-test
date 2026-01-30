// Flashcards 006 - יסודות מתמטיים
export default {
  id: "flashcards-006",
  name: "יסודות מתמטיים",
  description: "כרטיסיות על הבסיס המתמטי של למידה עמוקה",
  cards: [
    {
      front: "מהי פונקציית Sigmoid?",
      back: "σ(z) = 1/(1 + e^(-z))\nמחזירה ערכים בין 0 ל-1.\nנגזרת: σ'(z) = σ(z)(1 - σ(z))"
    },
    {
      front: "מהי נגזרת ReLU?",
      back: "ReLU(x) = max(0, x)\nנגזרת:\n• 1 אם x > 0\n• 0 אם x < 0\n• לא מוגדרת ב-x=0 (בפרקטיקה: 0 או 1)"
    },
    {
      front: "מהו Chain Rule?",
      back: "כלל השרשרת לנגזרות של הרכבת פונקציות:\n∂L/∂w = ∂L/∂y × ∂y/∂z × ∂z/∂w\nזה הבסיס של Backpropagation."
    },
    {
      front: "מהי נגזרת שכבה ליניארית ביחס למשקלים?",
      back: "עבור z = Wx + b:\n∂z_k/∂w_{k,m} = x_m (ערך הקלט)\n∂z_k/∂b_k = 1"
    },
    {
      front: "מהי Mean Squared Error (MSE)?",
      back: "MSE = (1/n) × Σ(ŷᵢ - yᵢ)²\nפונקציית מחיר לרגרסיה. מעניישת טעויות גדולות יותר (בגלל הריבוע)."
    },
    {
      front: "מהי Cross-Entropy Loss לסיווג בינארי?",
      back: "L = -[y×log(ŷ) + (1-y)×log(1-ŷ)]\nכאשר y הוא הסיווג האמיתי (0 או 1) ו-ŷ ההסתברות החזויה."
    },
    {
      front: "מהי Cross-Entropy Loss לסיווג רב-מחלקתי?",
      back: "L = -Σ yₖ×log(ŷₖ)\nכאשר y הוא one-hot vector של הסיווג האמיתי. בפרקטיקה: L = -log(ŷ_true_class)"
    },
    {
      front: "מהו Jacobian Matrix?",
      back: "מטריצת הנגזרות החלקיות של פונקציה וקטורית:\nJ[i,j] = ∂fᵢ/∂xⱼ\nמשמשת ב-backpropagation דרך שכבות."
    },
    {
      front: "מהו Gradient?",
      back: "וקטור הנגזרות החלקיות של פונקציה סקלרית:\n∇f = (∂f/∂x₁, ∂f/∂x₂, ..., ∂f/∂xₙ)\nמצביע לכיוון העלייה התלולה ביותר."
    },
    {
      front: "מהו One-Hot Encoding?",
      back: "ייצוג קטגוריות כוקטורים בינאריים:\nמחלקה 2 מתוך 5 → [0, 0, 1, 0, 0]\nרק איבר אחד = 1, השאר = 0."
    },
    {
      front: "מהי הנגזרת של Cross-Entropy + Softmax?",
      back: "עבור ŷ = softmax(z) ו-L = -log(ŷₖ):\n∂L/∂zᵢ = ŷᵢ - yᵢ\nהנגזרת פשוטה וזו הסיבה שמשתמשים בצמד הזה."
    },
    {
      front: "מהו Hessian Matrix?",
      back: "מטריצת הנגזרות השניות:\nH[i,j] = ∂²f/∂xᵢ∂xⱼ\nמתארת את הקימור של הפונקציה. condition number שלה משפיע על התכנסות."
    },
    {
      front: "מהו Condition Number?",
      back: "יחס בין הערך העצמי הגדול ביותר לקטן ביותר של מטריצה:\nκ = λ_max / λ_min\nκ גבוה = בעיות התכנסות ב-gradient descent."
    },
    {
      front: "מדוע Softmax יציבה נומרית עם תוספת קבוע?",
      back: "softmax(z + c) = softmax(z)\nלכן אפשר לחסר max(z) לפני החישוב כדי למנוע overflow באקספוננט."
    },
    {
      front: "מהו Likelihood Function?",
      back: "L(θ) = P(Data | θ)\nההסתברות לקבל את הנתונים בהינתן הפרמטרים θ.\nמקסום Likelihood שקול למינימום Cross-Entropy."
    },
    {
      front: "מהי נורמת L2 (Euclidean)?",
      back: "||w||₂ = √(Σwᵢ²)\nאורך הווקטור במרחב אוקלידי.\nמשמשת ב-L2 regularization."
    },
    {
      front: "מהי נורמת L1 (Manhattan)?",
      back: "||w||₁ = Σ|wᵢ|\nסכום הערכים המוחלטים.\nמשמשת ב-L1 regularization ליצירת sparsity."
    }
  ]
};
