package twoPointer;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main2531 {
    static int N, d, k, c, visit[];
    static int arr[];

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        d = Integer.parseInt(st.nextToken());
        k = Integer.parseInt(st.nextToken());
        c = Integer.parseInt(st.nextToken());

        arr = new int[N];
        visit = new int[d + 1];

        for (int i = 0; i < N; i++) {
            arr[i] = Integer.parseInt(br.readLine());
        }

        int total = 0, max = 0;

        for (int i = 0; i < k; i++) {
            if (visit[arr[i]] == 0)
                total++;
            visit[arr[i]]++;
        }
        max = total;

        for (int i = 1; i < N; i++) {
            if (max <= total) {
                if (visit[c] == 0)
                    max = total + 1;
                else
                    max = total;
            }

            visit[arr[i - 1]]--;
            if (visit[arr[i - 1]] == 0)
                total--;

            if (visit[arr[(i + k - 1) % N]] == 0)
                total++;
            visit[arr[(i + k - 1) % N]]++;
        }

        System.out.println(max);
    }
}
