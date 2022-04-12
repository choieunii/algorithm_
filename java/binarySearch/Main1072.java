package binarySearch;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main1072 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        long x = Long.parseLong(st.nextToken());
        long y = Long.parseLong(st.nextToken());

        long z = y * 100 / x;

        if (z >= 99) {
            System.out.println(-1);
            return;
        }

        long start = 0, end = 1000000000;

        while (start < end) {
            long mid = (start + end) / 2;

            long temp = 100 * (y + mid) / (x + mid);

            if (z < temp) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }

        System.out.println(end);
    }
}
