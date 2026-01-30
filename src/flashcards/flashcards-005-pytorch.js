// Flashcards 005 - PyTorch מעשי
export default {
  id: "flashcards-005",
  name: "PyTorch מעשי",
  description: "כרטיסיות על שימוש מעשי ב-PyTorch",
  cards: [
    {
      front: "מהו Tensor ב-PyTorch?",
      back: "מבנה נתונים רב-מימדי שמכיל נתונים מספריים. כל האיברים חייבים להיות מאותו טיפוס (int, float, bool). תומך בפעולות וקטוריות מהירות."
    },
    {
      front: "מהי הפקודה requires_grad=True?",
      back: "מורה ל-PyTorch לעקוב אחרי פעולות על הטנזור לצורך גזירה אוטומטית. הגרדיאנטים יחושבו בקריאה ל-.backward() ויישמרו ב-.grad"
    },
    {
      front: "מה עושה .backward()?",
      back: "מחשבת את הגרדיאנטים של כל הטנזורים עם requires_grad=True ביחס לטנזור שעליו קראנו backward (בדרך כלל ה-loss). הגרדיאנטים נצברים ב-.grad"
    },
    {
      front: "מדוע צריך optimizer.zero_grad()?",
      back: "כי PyTorch צוברת גרדיאנטים (מוסיפה לערך הקודם) בכל קריאה ל-.backward(). צריך לאפס לפני כל איטרציה חדשה."
    },
    {
      front: "מה עושה .detach()?",
      back: "יוצרת עותק של טנזור שמנותק ממערכת ה-autograd. משמש כשרוצים להשתמש בערך כקבוע ללא מעקב גרדיאנטים (למשל למדדי ביצוע)."
    },
    {
      front: "מהו torch.no_grad()?",
      back: "Context manager שמבטל מעקב גרדיאנטים:\nwith torch.no_grad():\n  # פעולות ללא מעקב\nמשמש בזמן inference ובעדכון ידני של פרמטרים."
    },
    {
      front: "מהו nn.Sequential?",
      back: "מחלקה שמאפשרת להגדיר רשת כרצף של שכבות:\nmodel = nn.Sequential(\n  nn.Linear(784, 128),\n  nn.ReLU(),\n  nn.Linear(128, 10)\n)"
    },
    {
      front: "מהו DataLoader?",
      back: "כלי לטעינת נתונים ב-batches:\nDataLoader(dataset, batch_size=32, shuffle=True)\nמאפשר איטרציה יעילה על הנתונים עם shuffling ו-batching."
    },
    {
      front: "מה ההבדל בין model.train() ל-model.eval()?",
      back: "train(): מצב אימון - Dropout ו-BatchNorm פועלים רגיל\neval(): מצב הערכה - Dropout מבוטל, BatchNorm משתמש בממוצעים שנשמרו"
    },
    {
      front: "מהי View ב-PyTorch?",
      back: "טנזור שמצביע לאותו מקום בזיכרון כמו טנזור אחר (ללא העתקת נתונים). חיתוך טנזור יוצר view. שינוי ב-view משנה את המקור."
    },
    {
      front: "מהו Broadcasting?",
      back: "הרחבה אוטומטית של ממדי טנזורים בפעולות element-wise. טנזור קטן \"משוכפל\" כדי להתאים לגדול. חוקים: ממדים שווים או אחד מהם = 1."
    },
    {
      front: "מה עושה .clone()?",
      back: "יוצרת עותק של הטנזור במקום חדש בזיכרון. שינויים בעותק לא משפיעים על המקור (בניגוד ל-view)."
    },
    {
      front: "מהו nn.Parameter?",
      back: "עוטף טנזור ומסמן אותו כפרמטר נלמד של המודל. האופטימייזר יעדכן אותו אוטומטית:\nself.weight = nn.Parameter(torch.randn(10, 5))"
    },
    {
      front: "מהי לולאת האימון הבסיסית?",
      back: "for batch in dataloader:\n  optimizer.zero_grad()\n  output = model(batch)\n  loss = criterion(output, target)\n  loss.backward()\n  optimizer.step()"
    },
    {
      front: "מהו LogSoftmax?",
      back: "מחשבת log(softmax(x)) בצורה יציבה נומרית:\nnn.LogSoftmax(dim=1)\nמשמשת עם NLLLoss כדי לקבל Cross-Entropy Loss."
    },
    {
      front: "מהו NLLLoss?",
      back: "Negative Log-Likelihood Loss. מצפה לקבל log-probabilities כקלט:\nloss = nn.NLLLoss()\nעם LogSoftmax נותן Cross-Entropy."
    },
    {
      front: "מהו CrossEntropyLoss?",
      back: "משלבת LogSoftmax + NLLLoss בפקודה אחת:\nloss = nn.CrossEntropyLoss()\nמקבלת logits (לפני softmax) ומחזירה cross-entropy."
    },
    {
      front: "כיצד מעבירים מודל ל-GPU?",
      back: "device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')\nmodel = model.to(device)\ndata = data.to(device)"
    }
  ]
};
