# Uses python3
import sys

def get_optimal_value(capacity, weights, values):
    value = 0
    valuePerWeight = valuePerWeight = sorted([[v / w, w] for v,w in zip(values,weights)], reverse=True)
    while capacity > 0 and valuePerWeight:
        maxi = 0
        idx = None
        for i,item in enumerate(valuePerWeight):
            if item [1] > 0 and maxi < item [0]:
                maxi = item [0]
                idx = i

        if idx is None:
            return 0.

        v = valuePerWeight[idx][0]
        w = valuePerWeight[idx][1]

        if w <= capacity:
            value += v*w
            capacity -= w
        else:
            if w > 0:
                value += capacity * v
                return value
        valuePerWeight.pop(idx)

    return value


if __name__ == "__main__":
    data = list(map(int, sys.stdin.read().split()))
    n, capacity = data[0:2]
    values = data[2:(2 * n + 2):2]
    weights = data[3:(2 * n + 2):2]
    # capacity = 50
    # values = [60, 100, 120]
    # weights = [20, 50, 30]
    opt_value = get_optimal_value(capacity, weights, values)
    print("{:.10f}".format(opt_value))
