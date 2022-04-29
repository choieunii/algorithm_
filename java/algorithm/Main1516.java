package algorithm;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main1516 {
    static int[] indegree;
    static Queue<Integer> queue = new LinkedList<>();
    static List<List<Integer>> list = new ArrayList<>();
    static int[] time;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        indegree = new int[N + 1];
        time = new int[N + 1];

        for (int i = 0; i <= N; i++) {
            list.add(new ArrayList<>());
        }

        for (int i = 1; i <= N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            time[i] = Integer.parseInt(st.nextToken());

            while (true) {
                int before = Integer.parseInt(st.nextToken());
                if (before == -1)
                    break;

                list.get(before).add(i);
                indegree[i]++;
            }
        }

        for (int i = 1; i <= N; i++) {
            if (indegree[i] == 0) {
                queue.offer(i);
            }
        }

        int[] dp = new int[N + 1];

        while (!queue.isEmpty()) {
            int node = queue.poll();

            for (int next : list.get(node)) {
                indegree[next]--;

                dp[next] = Math.max(dp[next], dp[node] + time[node]);
                if (indegree[next] == 0) {
                    queue.offer(next);
                }
            }
        }

        for (int i = 1; i <= N; i++) {
            System.out.println(dp[i] + time[i]);
        }
    }
}
