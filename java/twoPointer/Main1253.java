package twoPointer;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main1253 {
    static int N;
    static int[] A;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        N = Integer.parseInt(br.readLine());
        A = new int[N];
        StringTokenizer st = new StringTokenizer(br.readLine());

        for (int i = 0; i < N; i++) {
            A[i] = Integer.parseInt(st.nextToken());
        }
        Arrays.sort(A);

        int ans = 0;

        for (int i = 0; i < N; i++) {
            int left = 0, right = N - 1;

            while (left < right) {
                int tmp = A[left] + A[right];

                if (tmp < A[i]) {
                    left++;
                } else if (tmp > A[i]) {
                    right--;
                } else {
                    if (i != left && i != right) {
                        ans++;
                        break;
                    }
                    if (left == i)
                        left++;
                    if (right == i)
                        right--;
                }
            }
        }
        System.out.println(ans);
    }

    // boolean flag = false;
    // for (int j = 0; j < N; j++) {
    // for (int k = j + 1; k < N; k++) {

    // if (A[j] == A[i] || A[k] == A[i])
    // continue;

    // if (A[j] + A[k] == A[i] && !flag) {
    // ans++;
    // flag = true;
    // break;
    // }

    // }
    // } 무지성 코드 시간 초과
}
