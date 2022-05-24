package backtracking;

import java.io.*;
import java.util.*;

public class Main14889 {
    static StringTokenizer st;
    static int N;
    static int[][] arr;
    static int min = Integer.MAX_VALUE;
    static boolean[] visited;

    static void dfs(int idx, int count) {
        if (count == N / 2) {
            cal();
            return;
        }

        for (int i = idx; i < N; i++) {
            if (visited[i])
                continue;

            visited[i] = true;
            dfs(i + 1, count + 1);
            visited[i] = false;
        }
    }

    static void cal() {
        int start = 0;
        int link = 0;

        for (int i = 0; i < N - 1; i++) {
            for (int j = i + 1; j < N; j++) {
                if (visited[i] && visited[j]) {
                    start += arr[i][j] + arr[j][i];
                } else if (!visited[i] && !visited[j]) {
                    link += arr[i][j] + arr[j][i];
                }
            }
        }

        int gap = Math.abs(start - link);

        if (gap == 0) {
            System.out.println(gap);
            System.exit(0);
        }

        min = Math.min(gap, min);
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());
        arr = new int[N][N];
        visited = new boolean[N];

        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < N; j++) {
                arr[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        dfs(0, 0);
        System.out.println(min);
    }
}
