package backtracking;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main14888 {
    static StringTokenizer st;
    static int N;
    static int[] number;
    static int[] operator = new int[4];
    static int max = Integer.MIN_VALUE;
    static int min = Integer.MAX_VALUE;

    static void dfs(int idx, int num) {
        if (idx == N) {
            max = Math.max(max, num);
            min = Math.min(min, num);
            return;
        }

        for (int i = 0; i < 4; i++) {
            if (operator[i] <= 0)
                continue;

            operator[i]--;
            switch (i) {
                case 0:
                    dfs(idx + 1, num + number[idx]);
                    break;
                case 1:
                    dfs(idx + 1, num - number[idx]);
                    break;
                case 2:
                    dfs(idx + 1, num * number[idx]);
                    break;
                case 3:
                    dfs(idx + 1, num / number[idx]);
                    break;
            }
            operator[i]++;
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());
        number = new int[N];
        st = new StringTokenizer(br.readLine());

        for (int i = 0; i < N; i++) {
            number[i] = Integer.parseInt(st.nextToken());
        }

        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < 4; i++) {
            operator[i] = Integer.parseInt(st.nextToken());
        }

        dfs(1, number[0]);

        System.out.println(max);
        System.out.println(min);
    }
}
