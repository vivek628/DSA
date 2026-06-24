# Sliding Window Notes

## Core Idea

Maintain a window `[left, right]` and move pointers instead of recalculating from scratch.

## Fixed Window Template

```python
window_sum = 0
left = 0

for right in range(len(arr)):
    window_sum += arr[right]

    if right - left + 1 > k:
        window_sum -= arr[left]
        left += 1

    if right - left + 1 == k:
        # update answer
        pass
```

## Variable Window Template

```python
left = 0

for right in range(len(arr)):
    # add arr[right] to window

    while condition_is_invalid:
        # remove arr[left] from window
        left += 1

    # update answer
```

## Mistakes to Track

-
