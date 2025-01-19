To fix this issue, ensure that you always access the snapshot data within the `.then()` block of the promise.  This guarantees that the data has been fully loaded before your code attempts to access it.

```javascript
import { getDoc, doc } from "firebase/firestore";

// ... other code ...

getDoc(doc(db, "collections", "docId")).then((snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.data();
    console.log(data.name); // Access data here; it's guaranteed to be available
  } else {
    console.log("No such document!");
  }
}).catch((error) => {
  console.error("Error getting document:", error);
});
```
This revised code uses the `.then()` method to handle the promise returned by `getDoc()`. The code inside the `.then()` block is only executed once the promise resolves successfully, ensuring that `snapshot.data()` is defined.