package graph;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main2252 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        StringBuffer sb = new StringBuffer();

        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        int indegree[] = new int[n + 1];
        Arrays.fill(indegree, 0);

        ArrayList<ArrayList<Integer>> graph = new ArrayList<>();

        for (int i = 0; i <= n + 1; i++) {
            graph.add(new ArrayList<>());
        }

        for (int i = 0; i < m; i++) {
            StringTokenizer st2 = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st2.nextToken());
            int b = Integer.parseInt(st2.nextToken());
            graph.get(a).add(b);
            indegree[b]++;
        }

        Queue<Integer> queue = new LinkedList<>();

        for (int i = 1; i <= n; i++) {
            if (indegree[i] == 0) {
                queue.offer(i);
            }
        }

        while (!queue.isEmpty()) {
            int cur = queue.poll();

            sb.append(cur + " ");

            for (int node : graph.get(cur)) {

                indegree[node]--;

                if (indegree[node] == 0) {
                    queue.offer(node);
                }
            }
        }

        System.out.println(sb.toString());
    }
}
