summary of **how React works** :

### 1. **First Render**

```
App starts (ReactDOM.render or createRoot.render)
        ↓
Component functions are called for the first time
        ↓
Hooks initialized:
    - useState → sets initial state
    - useMemo → computes initial memoized values
    - useEffect → schedules side effects for after DOM update
        ↓
Virtual DOM is created from JSX
        ↓
React compares with previous Virtual DOM → none exists (first render)
        ↓
All Virtual DOM nodes are committed to the real DOM
        ↓
Browser paints the UI
        ↓
useEffect callbacks run (after DOM is painted)

```

---

### 2. **State or Prop Change**

```
setState / prop change triggers re-render
        ↓
Component functions called again
        ↓
Hooks return latest state / memoized values
        ↓
New Virtual DOM is created
        ↓
React diffs new Virtual DOM with previous Virtual DOM
        ↓
Only changed elements are updated in real DOM
        ↓
Browser updates UI
        ↓
useEffect runs (if dependencies changed)
```

---

### 3. **No Change**

```
Render is called
        ↓
New Virtual DOM is created
        ↓
Compared with previous Virtual DOM
        ↓
No differences → no real DOM updates
        ↓
useEffect runs only if dependencies changed
```

---

**Key Concepts**

* **Virtual DOM:** lightweight JS representation of UI
* **Previous Virtual DOM:** used for diffing and minimal updates
* **Browser DOM:** actual UI displayed to user
