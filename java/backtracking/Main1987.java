package backtracking;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main1987 {
    static int R, C;
    static int[][] map;
    static boolean[] visited = new boolean[100];
    static int[] dx = { 0, 0, 1, -1 };
    static int[] dy = { 1, -1, 0, 0 };
    static int max = Integer.MIN_VALUE;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        R = Integer.parseInt(st.nextToken());
        C = Integer.parseInt(st.nextToken());

        map = new int[R + 1][C + 1];
        for (int i = 0; i < R; i++) {
            String str = br.readLine();
            for (int j = 0; j < C; j++) {
                map[i][j] = str.charAt(j) - '0';
            }
        }

        dfs(0, 0, map[0][0], 1);
        System.out.println(max);
    }

    static void dfs(int x, int y, int alpha, int cnt) {
        if (visited[alpha])
            return;

        max = Math.max(max, cnt);

        for (int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];

            if (nx < 0 || nx >= R || ny < 0 || ny >= C)
                continue;

            visited[alpha] = true;
            dfs(nx, ny, map[nx][ny], cnt + 1);
            visited[alpha] = false;
        }

    }
}
