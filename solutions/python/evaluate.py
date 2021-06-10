"""
If you use python, You can use this file to evaluate your problem
If you use another language, you don't have to create this file in your language if it waste your time.
"""

import json
import math
import time
from time import perf_counter

from solutions.problem_1 import Solution
# from solutions.problem_2 import Solution
# from solutions.problem_3 import Solution

mem = [0, 0]


def eval_problem_1():
    with open('../../test_cases/problem_1.json') as json_file:
        t0 = perf_counter()
        test_cases = json.load(json_file)
        t1 = perf_counter()
        print("Json parsing: ", 1e3 * (t1 - t0), " ms")

        count = 0
        for test_case in test_cases:
            count += 1
            if count > 999: break

            sol = Solution()
            # sol.onStartCallback = updateMemBefore
            # sol.onFinishCallback = updateMemAfter

            prev_tx = perf_counter()
            print("\n----")
            print("Actual Output:")
            print("", sol.find_winner_index(
                nums=test_case["input"]["penny_numbers"],
                target=test_case["input"]["golden_number"]
            ))
            print("Expected Output:\n", test_case["output"])

            tx = perf_counter()
            print("Solution took: ", 1e3 * (tx - prev_tx), " ms")
            # print("Mem (KB): Current ", mem[0], " | Peak ", mem[1])  # NOTE: Must run test case from small to large

            time.sleep(0.5)


def eval_problem_2():
    with open('../../test_cases/problem_2.json') as json_file:
        t0 = perf_counter()
        test_cases = json.load(json_file)
        t1 = perf_counter()
        print("Json parsing: ", 1e3 * (t1 - t0), " ms")

        count = 0
        for test_case in test_cases:
            count += 1
            if count > 999: break

            sol = Solution()
            # sol.onStartCallback = updateMemBefore
            # sol.onFinishCallback = updateMemAfter

            prev_tx = perf_counter()
            print("\n----")
            print("Actual Output:")
            output = sol.calculate_commission(
                users=test_case["input"],
            )
            # print("", output)
            print("", json.dumps(output))
            print("Expected Output:\n", test_case["output"])

            tx = perf_counter()
            print("Solution took: ", 1e3 * (tx - prev_tx), " ms")
            # print("Mem (KB): Current ", mem[0], " | Peak ", mem[1])  # NOTE: Must run test case from small to large

            time.sleep(0.5)


def eval_problem_3():
    with open('../../test_cases/problem_3.json') as json_file:
        t0 = perf_counter()
        test_cases = json.load(json_file)
        t1 = perf_counter()
        print("Json parsing: ", 1e3 * (t1 - t0), " ms")

        count = 0
        for test_case in test_cases:
            count += 1
            if count > 999: break

            sol = Solution()
            # sol.onStartCallback = updateMemBefore
            # sol.onFinishCallback = updateMemAfter

            prev_tx = perf_counter()
            print("\n----")
            print("Actual Output:")
            output = sol.pick_package(
                capacity=test_case["input"]["capacity"],
                packages=test_case["input"]["package_types"],
            )
            # print("", output)
            print("", json.dumps(output))
            print("Expected Output:\n", test_case["output"])

            tx = perf_counter()
            print("Solution took: ", 1e3 * (tx - prev_tx), " ms")
            # print("Mem (KB): Current ", mem[0], " | Peak ", mem[1])  # NOTE: Must run test case from small to large

            time.sleep(0.5)


if __name__ == '__main__':
    eval_problem_1()
    # eval_problem_2()
    # eval_problem_3()
