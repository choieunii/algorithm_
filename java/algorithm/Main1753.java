package algorithm;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main1753 {
    static List<Edge>[] list;
    static final int Infinity = 300000;
    static PriorityQueue<Edge> queue = new PriorityQueue<>((a, b) -> a.cost - b.cost);

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int V = Integer.parseInt(st.nextToken());
        int E = Integer.parseInt(st.nextToken());

        int K = Integer.parseInt(br.readLine());

        int[] distance = new int[V + 1];
        list = new ArrayList[V + 1];

        for (int i = 0; i <= V; i++) {
            list[i] = new ArrayList<>();
        }

        Arrays.fill(distance, Infinity);

        for (int i = 0; i < E; i++) {
            st = new StringTokenizer(br.readLine());
            int u = Integer.parseInt(st.nextToken());
            int v = Integer.parseInt(st.nextToken());
            int w = Integer.parseInt(st.nextToken());

            list[u].add(new Edge(v, w));
        }

        distance[K] = 0;
        queue.add(new Edge(K, 0));

        while (!queue.isEmpty()) {
            Edge edge = queue.poll();

            for (Edge next : list[edge.node]) {
                if (distance[next.node] > edge.cost + next.cost) {
                    distance[next.node] = edge.cost + next.cost;
                    queue.offer(new Edge(next.node, distance[next.node]));
                }
            }
        }

        for (int i = 1; i <= V; i++) {
            if (distance[i] != Infinity)
                System.out.println(distance[i]);
            else
                System.out.println("INF");
        }
    }

    static class Edge {
        int node;
        int cost;

        Edge(int node, int cost) {
            this.node = node;
            this.cost = cost;
        }
    }
}
