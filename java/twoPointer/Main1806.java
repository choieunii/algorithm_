package twoPointer;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main1806 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int s = Integer.parseInt(st.nextToken());
        int arr[] = new int[n];

        st = new StringTokenizer(br.readLine());

        for (int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }

        int left = 0, right = 0;
        int min = Integer.MAX_VALUE;
        int sum = 0;

        while (true) {
            if (sum >= s) {
                sum -= arr[left++];
                int len = right - left + 1;
                min = Math.min(min, len);
            } else if (right == n) {
                break;
            } else {
                sum += arr[right++];
            }
        }

        if (min == Integer.MAX_VALUE)
            System.out.println(0);
        else
            System.out.println(min);
    }
}
