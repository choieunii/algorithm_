package twoPointer;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main2467 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        int[] arr = new int[n];

        StringTokenizer st = new StringTokenizer(br.readLine());

        for (int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }

        int left = 0, right = n - 1;
        int[] ans = new int[] { Math.abs(arr[left] + arr[right]), arr[left], arr[right] };

        while (left < right) {
            int sum = arr[left] + arr[right];

            if (Math.abs(sum) < ans[0]) {
                ans[0] = Math.abs(sum);
                ans[1] = arr[left];
                ans[2] = arr[right];

                if (sum == 0) {
                    break;
                }
            }

            if (sum < 0)
                left++;
            else
                right--;
        }

        System.out.println(ans[1] + " " + ans[2]);

    }
}
